import logging
from cornice import Service
from pyramid.security import (
    NO_PERMISSION_REQUIRED,
)
from . import cors
from ..models.guestuser import GuestUserMaster, GuestUserDateMap
from datetime import datetime


log = logging.getLogger(__name__)

svc_guest_user_list = Service(
    name="api.guest_user_list", permission=NO_PERMISSION_REQUIRED,
    path="/ui/guest_user_list", cors_policy=cors.POLICY)

svc_guest_user_details = Service(
    name="api.guest_user_details", permission=NO_PERMISSION_REQUIRED,
    path="/ui/guest_user_details/{id}", cors_policy=cors.POLICY)

svc_guest_add_user = Service(
    name="api.add_guest_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_guest_user", cors_policy=cors.POLICY)

svc_guest_edit_user = Service(
    name="api.edit_guest_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/edit_guest_user", cors_policy=cors.POLICY)

svc_guest_delete_user = Service(
    name="api.add_delete_user", permission=NO_PERMISSION_REQUIRED,
    path="/ui/add_delete_user/{id}", cors_policy=cors.POLICY)

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
        dates = []
        for ele1 in user_date_list:
            if ele1.guest_id == ele.id:
                dates.append({
                    "id": ele1.id,
                    "guest_id": ele1.guest_id,
                    "from_date": str(ele1.from_date),
                    "to_date": str(ele1.to_date)
                })
        user_data.append({
            "id": ele.id,
            "title": ele.title,
            "name": ele.name,
            "email": ele.email,
            "phone_no": ele.phone_no,
            "status": ele.status,
            "dates": dates
        })
    return {
        "code": 0,
        "message": "success",
        "data": user_data
    }


@svc_guest_user_details.post(require_csrf=False)
def get_guest_user_details(request):
    id = request.matchdict['id']
    user = GuestUserMaster.get_user(request.dbsession, id)
    dates = GuestUserDateMap.get_user_date_details(request.dbsession, id)
    date_list = []
    for ele in dates:
        date_list.append({
            "id": ele1.id,
            "guest_id": ele1.guest_id,
            "from_date": str(ele1.from_date),
            "to_date": str(ele1.to_date)
        })
    user_details = {
        "id": user.id,
        "title": user.title,
        "name": user.name,
        "email": user.email,
        "phone_no": user.phone_no,
        "status": user.status,
        "dates": date_list
    }
    return {
        "code": 0,
        "message": 'success',
        "data": user_details

    }


@svc_guest_add_user.post(require_csrf=False)
def add_guest_user(request):
    name = request.json_body['name']
    email = request.json_body['email']
    title = request.json_body['title']
    phone_no = request.json_body['phone_no']
    status = request.json_body['status']

    users = GuestUserMaster.check_user(request.dbsession, email, phone_no)
    if len(users) > 0:
        return {
            "code": 0,
            "message": "Data exists"
        }

    user = GuestUserMaster(name=name, email=email, 
        title=title, phone_no=phone_no, status=status)
    request.dbsession.add(user)
    
    return {
        "code": 0,
        "message": "success"
    }

@svc_guest_add_user_dates.post(require_csrf=False)
def add_guest_user_dates(request):
    guest_id = GuestUserMaster.get_first(request.dbsession)
    print(guest_id)
    dates = request.json_body['dates']

    for ele in dates:
        to_date = datetime.strptime(str(ele['to_date']), "%Y-%m-%dT%H:%M:%S.000z")
        from_date = datetime.strptime(str(ele['from_date']), "%Y-%m-%dT%H:%M:%S.000z")
        entry = GuestUserDateMap(guest_id=guest_id, to_date=to_date, from_date=from_date)
        request.dbsession.add(entry)

    return {
        "code": 0,
        "message": "success"
    }


@svc_guest_delete_user.post(require_csrf=False)
def delete_guest_user(request):
    id = request.matchdict['id']
    delete_dates_date = request.dbsession(GuestUserDateMap).filter_by(guest_id=id).delete()
    delete_data = request.dbsession(GuestUserMaster).filter_by(id=id).delete()

    return {
        "code": 0,
        "message": "success"
    }


@svc_guest_edit_user.post(require_csrf=False)
def edit_guest_user(request):
    id = request.json_body['id']
    name = request.json_body['name']
    email = request.json_body['email']
    title = request.json_body['title']
    phone_no = request.json_body['phone_no']
    status = request.json_body['status']

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
    user.status = status
    request.dbsession.commit()
    
    return {
        "code": 0,
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
        "code": 0,
        "message": "success"
    }