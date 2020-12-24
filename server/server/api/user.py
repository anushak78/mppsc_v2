import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.usermaster import UserMaster
from ..models.usermaster import UserLoginMaster


log = logging.getLogger(__name__)

svc_user_list = Service(
    name="api.user_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/user_list", cors_policy=cors.POLICY)

svc_add_user = Service(
    name="api.add_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_user", cors_policy=cors.POLICY)


@svc_user_list.get()
def get_user_list(request):
    user_list_board = UserMaster.get_users(request.dbsession)
    user_list_vo = UserLoginMaster.get_vo_users(request.dbsession)
    return {
        "code": 1,
        "message": "success",
        "board_users": user_list_board,
        "vo_users": user_list_vo
    }


@svc_add_user.post()
def add_user(request):
    name = request.json_body['name']
    role = request.json_body['role']
    title = request.json_body['title']
    designation = request.json_body['designation']

    if role == 0 or role == 1:
        user = UserMaster(name=name, role=role, 
            title=title, designation=designation, status='A')
        request.dbsession.add(user)
        # TODO: add fingerprint entry

    elif role == 2:
        login = request.json_body['login']
        password = request.json_body['password']
        user = UserLoginMaster(name=name, role=role, 
            title=title, designation=designation, status='A', login=login)
        user.set_password('a')
        request.dbsession.add(user)

    return {
        "code": 1,
        "message": "success"
    }
