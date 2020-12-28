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

svc_delete_user = Service(
    name="api.delete_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/delete_user", cors_policy=cors.POLICY)

svc_edit_user = Service(
    name="api.edit_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/edit_user", cors_policy=cors.POLICY)


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


@svc_add_user.post(require_csrf=False)
def add_user(request):
    name = request.json_body['name']
    role = request.json_body['role']
    title = request.json_body['title']
    designation = request.json_body['designation']

    if role == 0 or role == 1:
        user = UserMaster.check_user(request.dbsession, name)
        if user is None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserMaster(name=name, role=role, 
            title=title, designation=designation, status='A')
        request.dbsession.add(user)
        # TODO: add fingerprint entry

    elif role == 2:
        login = request.json_body['login']
        password = request.json_body['password']
        user = UserLoginMaster.check_user(request.dbsession, login)
        if user is None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserLoginMaster(name=name, role=role, 
            title=title, designation=designation, status='A', login=login)
        user.set_password(password)
        request.dbsession.add(user)

    return {
        "code": 1,
        "message": "success"
    }


@svc_delete_user.post(require_csrf=False)
def delete_user(request):
    id = request.json_body['id']
    role = request.json_body['role']

    if role == 0 or role == 1:
        del_user = UserMaster.delete_user(request.dbsession, id)
    
    elif role == 2:
        del_user = UserLoginMaster.delete_user(request.dbsession, id)
    
    return {
        "code": 1,
        "message": "success"
    }

@svc_edit_user.post(require_csrf=False)
def edit_user(request):
    id = request.json_body['id']
    name = request.json_body['name']
    role = request.json_body['role']
    title = request.json_body['title']
    designation = request.json_body['designation']
    if role == 0 or role == 1:
        user = UserMaster.check_user(request.dbsession, name)
        if user is None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserMaster.get_user(request.dbsession, id)
        user.name = name
        user.role = role
        user.title = title
        user.designation = designation
        request.dbsession.commit()
        # TODO: add fingerprint entry

    elif role == 2:
        login = request.json_body['login']
        password = request.json_body['password']
        user = UserLoginMaster.check_user(request.dbsession, login)
        if user is None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserMaster.get_user(request.dbsession, id)
        user.name = name
        user.role = role
        user.title = title
        user.designation = designation
        user.login = login
        user.set_password(password)
        request.dbsession.commit()

    return {
        "code": 1,
        "message": "success"
    }