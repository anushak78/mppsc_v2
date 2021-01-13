import logging
from cornice import Service
from datetime import datetime

from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.interview import (
    InterviewMaster, 
    InterviewDatesMaster, 
    InterviewMarksMaster, 
    BoardInterviewMap, 
    BoardUserMap,
    InterviewVOMap
)

from ..models.guestuser import (
    GuestUserMaster,
    GuestUserDateMap
)

from ..models.usermaster import (
    UserMaster
)

from ..models.constants import MarksCategory

log = logging.getLogger(__name__)

svc_interview_list = Service(
    name="api.interview_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/interview_list", cors_policy=cors.POLICY)

svc_interview_details = Service(
    name="api.interview_details", permission=NO_PERMISSION_REQUIRED,
    path="/ui/interview_details/{id}", cors_policy=cors.POLICY)

svc_fetch_interview_dates = Service(
    name="api.fetch_interview_dates", permission=NO_PERMISSION_REQUIRED,
    path="/ui/fetch_interview_dates/{id}", cors_policy=cors.POLICY)

svc_fetch_users = Service(
    name="api.fetch_users", permission=NO_PERMISSION_REQUIRED,
    path="/ui/fetch_users", cors_policy=cors.POLICY)

svc_fetch_vo_users = Service(
    name="api.fetch_vo_users", permission=NO_PERMISSION_REQUIRED,
    path="/ui/fetch_vo_users", cors_policy=cors.POLICY)

svc_add_interview = Service(
    name="api.add_interview", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_interview", cors_policy=cors.POLICY)

svc_add_user_boards = Service(
    name="api.add_user_boards", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_user_boards", cors_policy=cors.POLICY)

svc_delete_interview = Service(
    name="api.delete_interview", permission=NO_PERMISSION_REQUIRED,
    path="/ui/delete_interview/{id}", cors_policy=cors.POLICY)


@svc_interview_list.get()
def get_interview_list(request):
    interview = InterviewMaster.get_interviews(request.dbsession)
    interview_list = []
    for ele in interview:
        interview_list.append({
            "id": ele.id,
            "name": ele.name,
            "notification_no": ele.notification_no,
            "status": ele.status,
            "interview_id": ele.interview_id
        })
    return {
        "code": 0,
        "message": "success",
        "data": interview_list 
    }


@svc_fetch_interview_dates.post(require_csrf=False)
def fetch_interview_dates(request):
    id = request.matchdict['id']
    dates = InterviewDatesMaster.get_interview_dates(request.dbsession, id)
    
    return {
        "code": 0,
        "message": "sucess",
        "dates": dates
    }


@svc_interview_details.post(require_csrf=False)
def get_interview_details(request):
    id = request.matchdict['id']
    ele = InterviewMaster.get_interview(request.dbsession, id)
    dates = InterviewDatesMaster.get_interview_dates(request.dbsession, id)
    marks = InterviewMarksMaster.get_interview_marks(request.dbsession, id)
    interview_details = {
        "id": ele.id,
        "name": ele.name,
        "notification_no": ele.notification_no,
        "interview_id": ele.interview_id,
        "status": ele.status,
        "dates": dates,
        "marks": marks
    }
    return {
        "code": 0,
        "message": "sucess",
        "data": interview_details
    }


@svc_fetch_users.get()
def fetch_users(request):
    id = request.json_body['id']
    guest_user_ids = GuestUserMaster.get_users(request.dbsession)
    guest_user = []
    for ele in guest_user_ids:
        guest_user.append({
            "id": ele.id,
            "name": ele.name,
            "title": ele.title,
            "email": ele.email,
            "phone_no": ele.phone_no,
            "status": ele.status
        })
    board_users = UserMaster.get_board_users(request.dbsession)
    return {
        "code": 0,
        "message": "success",
        "board_user_list": board_users,
        "guest_user_list": guest_user
    }


@svc_fetch_vo_users.get()
def fetch_vo_users(request):
    vo_users = UserMaster.get_vo_users(request.dbsession)
    return {
        "code": 0,
        "message": "success",
        "vo_user_list": vo_users
    }


@svc_add_interview.post(require_csrf=False)
def add_interview(request):
    interview_id = request.json_body['interview_id']
    name = request.json_body['name']
    notification_no = request.json_body['notification_no']
    status = request.json_body['status']
    
    flag = InterviewMaster.check_interview(request.dbsession, name)
    if flag is not None:
        return {
            "code": 0,
            "message": "data exists"
        }

    interview = InterviewMaster(name=name, 
        notification_no=notification_no, status=status, interview_id=interview_id)
    request.dbsession.add(interview)
    id = InterviewMaster.get_first(request.dbsession)
    add_interview_dates(request, id)
    add_interview_marks(request, id)
    return {
            "code": 0,
            "message": "success",
            "id": id
        }


def add_interview_dates(request, id):
    dates = request.json_body['dates']

    for ele in dates:
        to_date = datetime.strptime(str(ele['to_date']), "%Y-%m-%dT%H:%M:%S.000z")
        from_date = datetime.strptime(str(ele['from_date']), "%Y-%m-%dT%H:%M:%S.000z")
        interview_date = InterviewDatesMaster(interview_id=id, 
            to_date=to_date, from_date=from_date)
        request.dbsession.add(interview_date)
        
        date_id = request.dbsession.query(InterviewDatesMaster).order_by(
            InterviewDatesMaster.id.desc()).first()
        boards = ele['boardMaster']
        vo_users = ele['verificationOfficer']
        for ele1 in boards:
            interview_board = BoardInterviewMap(interview_id=id, 
                board_id=ele1.id, date_id=date_id)
            request.dbsession.add(interview_board)
        
        for ele1 in vo_users:
            user_id = ele1['id']
            user_map = InterviewVOMap(interview_id=id, user_id=user_id, date_id=date_id)
            request.dbsession.add(user_map)
    
    return True


def add_interview_marks(request, interview_id):
    marks = request.json_body['marks']
    interview_marks_list = []

    interview_marks_list.append(InterviewMarksMaster(
        interview_id=interview_id, min_marks=marks['min_marks_unreserved'],
        max_marks=marks['min_marks_unreserved'], marks_type=MarksCategory.UR.value))
    interview_marks_list.append(InterviewMarksMaster(
        interview_id=interview_id, min_marks=marks['min_marks_sc'],
        max_marks=marks['min_marks_sc'], marks_type=MarksCategory.SC.value))
    interview_marks_list.append(InterviewMarksMaster(
        interview_id=interview_id, min_marks=marks['min_marks_st'],
        max_marks=marks['min_marks_st'], marks_type=MarksCategory.ST.value))
    interview_marks_list.append(InterviewMarksMaster(
        interview_id=interview_id, min_marks=marks['min_marks_ews'],
        max_marks=marks['min_marks_ews'], marks_type=MarksCategory.EWS.value))
    interview_marks_list.append(InterviewMarksMaster(
        interview_id=interview_id, min_marks=marks['min_marks_obc'],
        max_marks=marks['min_marks_obc'], marks_type=MarksCategory.OBC.value))

    request.dbsession.add_all(interview_marks_list)
    return True


@svc_add_user_boards.post(require_csrf=False)
def add_user_boards(request):
    obj = request.json_body['obj']
    for ele in obj:
        boardmap_id = ele['boardmap_id']
        user_id = ele['user_id']
        user_role = ele['role']
        user_board_map = BoardUserMap(
            boardmap_id=boardmap_id, user_id=user_id, user_role=user_role)
        request.dbsession.add(user_board_map)

    return {
        "code": 0,
        "message": "success"
    }