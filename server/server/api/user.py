import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.usermaster import UserMaster


log = logging.getLogger(__name__)

svc_user_list = Service(
    name="api.user_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/user_list", cors_policy=cors.POLICY)

svc_user_details = Service(
    name="api.user_details", permission=NO_PERMISSION_REQUIRED,
    path="/ui/user_details/{id}", cors_policy=cors.POLICY)

svc_add_user = Service(
    name="api.add_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_user", cors_policy=cors.POLICY)

svc_delete_user = Service(
    name="api.delete_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/delete_user/{id}", cors_policy=cors.POLICY)

svc_edit_user = Service(
    name="api.edit_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/edit_user", cors_policy=cors.POLICY)


@svc_user_list.get()
def get_user_list(request):
    users = UserMaster.get_users(request.dbsession)
    user_list = []
    for ele in users:
        user_list.append({
            "id": ele.id,
            "name": ele.name,
            "title": ele.title,
            "role": ele.role,
            "status": ele.status,
            "login": ele.login,
            "designation": ele.designation
        })
    return {
        "code": 0,
        "message": "success",
        "data": user_list
    }


@svc_user_details.post(require_csrf=False)
def get_user_details(request):
    id = request.matchdict['id']
    user = UserMaster.get_user(request.dbsession, id)
    user_details = {
        "id": user.id,
        "name": user.name,
        "role": user.role,
        "title": user.title,
        "designation": user.designation,
        "status": user.status
    }
    return {
        "code": 0,
        "message": "success",
        "data": user_details 
    }


@svc_add_user.post(require_csrf=False)
def add_user(request):
    name = request.json_body['name']
    role = request.json_body['role']
    title = request.json_body['title']
    designation = request.json_body['designation']
    status = request.json_body['status']

    if role == 1 or role == 2:
        user = UserMaster.check_user(request.dbsession, name)
        if user is not None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserMaster(name=name, role=role, 
            title=title, designation=designation, status=status, login=None)
        request.dbsession.add(user)
        # TODO: add fingerprint entry

    elif role == 3:
        login = request.json_body['userId']
        password = request.json_body['password']
        confirm_password = request.json_body['confirm-password']
        if password != confirm_password:
            return {
                "code": 0,
                "message": "Password is not same as confirm password"
            }
        user = UserMaster.check_user_vo(request.dbsession, login)
        if user is not None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserMaster(name=name, role=role, 
            title=title, designation=designation, status=status, login=login)
        user.set_password(password)
        request.dbsession.add(user)

    return {
        "code": 0,
        "message": "Data added successfully"
    }


@svc_delete_user.post(require_csrf=False)
def delete_user(request):
    id = request.matchdict['id']

    #del_user = UserMaster.delete_user(request.dbsession, id)
    user = UserMaster.get_user(request.dbsession, id)
    user.status = 0
    request.dbsession.commit()
    return {
        "code": 0,
        "message": "success"
    }

@svc_edit_user.post(require_csrf=False)
def edit_user(request):
    id = request.json_body['userId']
    name = request.json_body['name']
    role = request.json_body['role']
    title = request.json_body['title']
    designation = request.json_body['designation']
    status = request.json_body['status']
    if role == 1 or role == 2:
        user = UserMaster.check_user(request.dbsession, name)
        if user is not None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserMaster.get_user(request.dbsession, id)
        user.name = name
        user.role = role
        user.title = title
        user.designation = designation
        user.status = status
        request.dbsession.commit()
        # TODO: add fingerprint entry

    elif role == 3:
        login = request.json_body['userId']
        password = request.json_body['password']
        user = UserMaster.check_user_vo(request.dbsession, login)
        if user is not None:
            return {
                "code": 0,
                "message": "Data exists"
            }
        user = UserMaster.get_user(request.dbsession, id)
        user.name = name
        user.role = role
        user.title = title
        user.designation = designation
        user.status = status
        user.login = login
        user.set_password(password)
        request.dbsession.commit()

    return {
        "code": 0,
        "message": "success"
    }