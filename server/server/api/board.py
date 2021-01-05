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

svc_board_details = Service(
    name="api.board_details", permission=NO_PERMISSION_REQUIRED,
    path="/ui/board_details/{id}", cors_policy=cors.POLICY)

svc_add_board = Service(
    name="api.add_board", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_board", cors_policy=cors.POLICY)

svc_delete_board = Service(
    name="api.delete_board", permission=NO_PERMISSION_REQUIRED,
    path="/ui/delete_board/{id}", cors_policy=cors.POLICY)

svc_edit_board = Service(
    name="api.edit_board", permission=NO_PERMISSION_REQUIRED,
    path="/ui/edit_board", cors_policy=cors.POLICY)


@svc_board_details.post(require_csrf=False)
def get_board_list(request):
    id = request.matchdict['id']
    board = BoardMaster.get_board(request.dbsession, id)
    return {
        "code": 0,
        "message": "success",
        "data": board
    }


@svc_board_list.get()
def get_board_list(request):
    board_list = BoardMaster.get_boards(request.dbsession)
    return {
        "code": 0,
        "message": "success",
        "data": board_list
    }


@svc_add_board.post(require_csrf=False)
def add_board(request):
    board_name = request.json_body['board_name']
    no_of_members = request.json_body['no_of_members']
    login_id = request.json_body['login_id']
    password = request.json_body['password']
    confirm_password = request.json_body['confirm_password']
    status = request.json_body['status']

    if password != confirm_password:
        return {
            "code": 0,
            "message": "success"
        }

    board = BoardMaster.check_board(request.dbsession, login_id)
    if board is not None:
        return {
            "code": 0,
            "message": "Data exists"    
        }

    board = BoardMaster(board_name=board_name, no_of_members=no_of_members, 
        login_id=login_id, status=status)
    board.set_password(password)
    request.dbsession.add(board)
    
    return {
        "code": 0,
        "message": "success"
    }


@svc_delete_board.post(require_csrf=False)
def delete_board(request):
    id = request.matchdict['id']
    board = BoardMaster.get_board(request.dbsession, id)
    board.status = 0
    
    return {
        "code": 0,
        "message": "success"
    }


@svc_edit_board.post(require_csrf=False)
def edit_board(request):
    id = request.json_body['id']
    board_name = request.json_body['board_name']
    no_of_members = request.json_body['no_of_members']
    login_id = request.json_body['login_id']
    password = request.json_body['password']
    status = request.json_body['status']

    board = BoardMaster.get_board(request.dbsession, id)
    board.board_name = board_name
    board.no_of_members = no_of_members
    board.login_id = login_id
    board.status = status
    board.set_password(password)
    
    return {
        "code": 0,
        "message": "success"
    }