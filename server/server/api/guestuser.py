import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.guestuser import GuestUserMaster, GuestUserDateMap


log = logging.getLogger(__name__)

svc_guest_user_list = Service(
    name="api.guest_user_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/guest_user_list", cors_policy=cors.POLICY)

svc_guest_add_user = Service(
    name="api.add_guest_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_guest_user", cors_policy=cors.POLICY)

svc_guest_edit_user = Service(
    name="api.edit_guest_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/edit_guest_user", cors_policy=cors.POLICY)

svc_guest_delete_user = Service(
    name="api.add_delete_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_delete_user", cors_policy=cors.POLICY)

svc_guest_add_user_dates = Service(
    name="api.add_guest_user_dates", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_guest_user_dates", cors_policy=cors.POLICY)

svc_guest_edit_user_dates = Service(
    name="api.edit_guest_user_dates", permission=NO_PERMISSION_REQUIRED,
    path="/ui/edit_guest_user_dates", cors_policy=cors.POLICY)


@svc_guest_user_list.get()
def get_guest_user_list(request):
    user_list = GuestUserMaster.get_users(request.dbsession)
    user_date_list = GuestUserDateMap.get_user_dates(request.dbsession)
    user_data = []
    for ele in user_list:
        dates = [data for n in user_date_list if guest_id == ele.id]
        user_data({
            "id": ele.id,
            "title": ele.title,
            "name": ele.name,
            "email": ele.email,
            "phone_no": ele.phone_no,
            "status": ele.status,
            "dates": dates
        })
    return {
        "code": 1,
        "message": "success",
        "users": user_data
    }


@svc_guest_add_user.post(require_csrf=False)
def add_guest_user(request):
    name = request.json_body['name']
    email = request.json_body['email']
    title = request.json_body['title']
    phone_no = request.json_body['phone_no']

    users = GuestUserMaster.check_user(request.dbsession, email, phone_no)
    if len(users) > 0:
        return {
            "code": 0,
            "message": "Data exists"
        }

    user = GuestUserMaster(name=name, email=email, 
        title=title, phone_no=phone_no, status='A')
    request.dbsession.add(user)
    
    return {
        "code": 1,
        "message": "success"
    }

@svc_guest_add_user_dates.post(require_csrf=False)
def add_guest_user_dates(request):
    guest_id = request.json_body['id']
    dates = request.json_body['dates']

    for ele in dates:
        to_date = ele['to_date']
        from_date = ele['from_date']
        entry = GuestUserDateMap(guest_id=guest_id, to_date=to_date, from_date=from_date)
        request.dbsession.add(entry)

    return {
        "code": 1,
        "message": "success"
    }


@svc_guest_delete_user.post(require_csrf=False)
def delete_guest_user(request):
    id = request.json_body['id']
    delete_dates_date = request.dbsession(GuestUserDateMap).filter_by(guest_id=id).delete()
    delete_data = request.dbsession(GuestUserMaster).filter_by(id=id).delete()

    return {
        "code": 1,
        "message": "success"
    }


@svc_guest_edit_user.post(require_csrf=False)
def edit_guest_user(request):
    id = request.json_body['id']
    name = request.json_body['name']
    email = request.json_body['email']
    title = request.json_body['title']
    phone_no = request.json_body['phone_no']

    users = GuestUserMaster.check_user(request.dbsession, email, phone_no)
    if len(users) > 0:
        return {
            "code": 0,
            "message": "Data exists"
        }

    user = GuestUserMaster.get_user(request.dbsession, id)
    user.name = name
    user.email = email
    user.title = title
    user.phone_no = phone_no
    request.dbsession.commit()
    
    return {
        "code": 1,
        "message": "success"
    }


@svc_guest_edit_user_dates.post(require_csrf=False)
def edit_guest_user_dates(request):
    guest_id = request.json_body['id']
    dates = request.json_body['dates']

    delete_dates_date = request.dbsession(GuestUserDateMap).filter_by(guest_id=id).delete()
    for ele in dates:
        to_date = ele['to_date']
        from_date = ele['from_date']
        entry = GuestUserDateMap(guest_id=guest_id, to_date=to_date, from_date=from_date)
        request.dbsession.add(entry)

    return {
        "code": 1,
        "message": "success"
    }