import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.guestuser import GuestUserMaster


log = logging.getLogger(__name__)

svc_guest_user_list = Service(
    name="api.guest_user_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/guest_user_list", cors_policy=cors.POLICY)

svc_guest_add_user = Service(
    name="api.add_guest_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_guest_user", cors_policy=cors.POLICY)


@svc_guest_user_list.get()
def get_guest_user_list(request):
    user_list = GuestUserMaster.get_users(request.dbsession)
    return {
        "code": 1,
        "message": "success",
        "users": user_list
    }


@svc_guest_add_user.post()
def add_guest_user(request):
    name = request.json_body['name']
    email = request.json_body['email']
    title = request.json_body['title']
    phone_no = request.json_body['phone_no']
    user = GuestUserMaster(name=name, email=email, 
        title=title, phone_no=phone_no, status='A')
    request.dbsession.add(user)
    
    return {
        "code": 1,
        "message": "success"
    }

# TODO: add dates for the guest users