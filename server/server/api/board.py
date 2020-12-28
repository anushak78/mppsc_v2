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

svc_delete_board = Service(
    name="api.delete_board", permission=NO_PERMISSION_REQUIRED,
    path="/ui/delete_board", cors_policy=cors.POLICY)

svc_edit_board = Service(
    name="api.edit_board", permission=NO_PERMISSION_REQUIRED,
    path="/ui/edit_board", cors_policy=cors.POLICY)


@svc_board_list.get()
def get_board_list(request):
    board_list = BoardMaster.get_boards(request.dbsession)
    return {
        "code": 1,
        "message": "success",
        "data": board_list
    }


@svc_add_board.post(require_csrf=False)
def add_board(request):
    subject_name = request.json_body['subject_name']
    no_of_members = request.json_body['no_of_members']
    login_id = request.json_body['login_id']
    password = request.json_body['password']

    board = BoardMaster.check_board(request.dbsession, login_id)
    if board is None:
        return {
            "code": 0,
            "message": "Data exists"    
        }

    board = BoardMaster(subject_name=subject_name, no_of_members=no_of_members, 
        login_id=login_id, status='A')
    board.set_password(password)
    request.dbsession.add(board)
    
    return {
        "code": 1,
        "message": "success"
    }


@svc_delete_board.post(require_csrf=False)
def delete_board(request):
    id = request.json_body['id']
    del_board = BoardMaster.delete_board(request.dbsession, id)
    
    return {
        "code": 1,
        "message": "success"
    }


@svc_edit_board.post(require_csrf=False)
def edit_board(request):
    id = request.json_body['id']
    subject_name = request.json_body['subject_name']
    no_of_members = request.json_body['no_of_members']
    login_id = request.json_body['login_id']
    password = request.json_body['password']

    board = BoardMaster.check_board(request.dbsession, login_id)
    if board is None:
        return {
            "code": 0,
            "message": "Data exists"    
        }

    board = BoardMaster.get_board(request.dbsession, id)
    board.subject_name = subject_name
    board.no_of_members = no_of_members
    board.login_id = login_id
    board.set_password(password)
    request.dbsession.commit()
    
    return {
        "code": 1,
        "message": "success"
    }