import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.interview import (
    InterviewMaster, 
    InterviewDatesMaster, 
    InterviewMarksMaster, 
    BoardInterviewMap, 
    BoardUserMap
)

log = logging.getLogger(__name__)

svc_interview_list = Service(
    name="api.interview_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/interview_list", cors_policy=cors.POLICY)

svc_interview_details = Service(
    name="api.interview_details", permission=NO_PERMISSION_REQUIRED,
    path="/ui/interview_details/{id}", cors_policy=cors.POLICY)

svc_add_interview = Service(
    name="api.add_interview", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_interview", cors_policy=cors.POLICY)

svc_add_interview_dates = Service(
    name="api.add_interview_dates", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_interview_dates", cors_policy=cors.POLICY)


svc_add_interview_marks = Service(
    name="api.add_interview_marks", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_interview_marks", cors_policy=cors.POLICY)


svc_add_interview_boards = Service(
    name="api.add_interview_boards", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_interview_boards", cors_policy=cors.POLICY)


@svc_interview_list.get()
def get_interview_list(request):
    interview = InterviewMaster.get_interviews(request.dbsession)
    interview_list = []
    for ele in interview:
        interview_list.append({
            "id": ele.id,
            "name": ele.name,
            "notification_no": ele.notification_no,
            "status": ele.status
        })
    return {
        "code": 0,
        "message": "success",
        "data": interview_list 
    }


@svc_interview_details.post(require_csrf=False)
def get_interview_details(request):
    id = request.matchdict['id']
    ele = InterviewMaster.get_interview(request.dbsession, id)
    dates = InterviewDatesMaster.get_interview_dates(request.dbsession, id)
    marks = InterviewMarksMaster.get_interview_marks(request.dbsession, id)
    boards = BoardInterviewMap.get_interview_board(request.dbsession, id)
    interview_details = {
        "id": ele.id,
        "name": ele.name,
        "notification_no": ele.notification_no,
        "status": ele.status,
        "dates": dates,
        "marks": marks,
        "boards": boards
    }
    return {
        "code": 0,
        "message": "sucess",
        "data": interview_details
    }


@svc_add_interview.post(require_csrf=False)
def add_interview(request):
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
        notification_no=notification_no, status=status)
    request.dbsession.add(interview)
    return {
            "code": 0,
            "message": "success"
        }


@svc_add_interview_dates.post(require_csrf=False)
def add_interview_dates(request):
    id = InterviewMaster.get_first(request.dbsession)
    dates = request.json_body['dates']

    for ele in dates:
        to_date = datetime.strptime(str(ele['to_date']), "%Y-%m-%dT%H:%M:%S.000z")
        from_date = datetime.strptime(str(ele['from_date']), "%Y-%m-%dT%H:%M:%S.000z")
        interview_date = InterviewDatesMaster(interview_id=id, 
            to_date=to_date, from_date=from_date)
        request.dbsession.add(interview_date)
    
    return {
        "code": 0,
        "message": "success"
    }


@svc_add_interview_marks.post(require_csrf=False)
def add_interview_marks(request):
    id = InterviewMaster.get_first(request.dbsession)
    marks = request.json_body['marks']

    for ele in marks:
        interview_marks = InterviewDatesMaster(interview_id=id, 
            min_marks=ele.min_marks, max_marks=ele.max_marks)
        request.dbsession.add(interview_marks)
    
    return {
        "code": 0,
        "message": "success"
    }


@svc_add_interview_boards.post(require_csrf=False)
def add_interview_boards(request):
    id = InterviewMaster.get_first(request.dbsession)
    boards = request.json_body['boards']

    for ele in boards:
        board_date = datetime.strptime(str(ele['date']), "%Y-%m-%dT%H:%M:%S.000z")
        interview_board = BoardInterviewMap(interview_id=id, 
            board_id=ele.board_id, date=board_date)
        request.dbsession.add(interview_board)

    board_map_list = get_board_interview_map_ids(request, id)
    
    return {
        "code": 0,
        "message": "success",
        "data": board_map_list
    }


def get_board_interview_map_ids(request, id):
    return BoardInterviewMap.get_interview_board(request.dbsession, id)