import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.boardmaster import BoardMaster


log = logging.getLogger(__name__)

svc_board_list = Service(
    name="api.board_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/board_list", cors_policy=cors.POLICY)

svc_add_board = Service(
    name="api.add_board", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_board", cors_policy=cors.POLICY)


@svc_board_list.get()
def get_board_list(request):
    board_list = BoardMaster.get_boards(request.dbsession)
    return {
        "code": 1,
        "message": "success",
        "data": board_list
    }


@svc_add_board.post()
def add_board(request):
    subject_name = request.json_body['subject_name']
    no_of_members = request.json_body['no_of_members']
    login_id = request.json_body['login_id']
    password = request.json_body['password']

    board = BoardMaster(subject_name=subject_name, no_of_members=no_of_members, 
        login_id=login_id, password=password, status='A')
    request.dbsession.add(board)
    
    return {
        "code": 1,
        "message": "success"
    }
