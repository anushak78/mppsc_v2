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


@svc_interview_details.get()
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