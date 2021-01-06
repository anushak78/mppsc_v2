# Copyright (C) 2018 NSEIT Limited, Mumbai. All rights reserved.
#
# This program and the accompanying materials are made available
# under the terms described in the LICENSE file which accompanies
# this distribution. If the LICENSE file was not attached to this
# distribution or for further clarifications, please contact
# legal@nseit.com.

import logging

from pyramid.security import (
    NO_PERMISSION_REQUIRED,
    Authenticated,
    remember,
    forget,
)
from pyramid.csrf import new_csrf_token

from cornice import Service

from ..models.usermaster import UserMaster
from ..models.boardmaster import BoardMaster
from . import cors

log = logging.getLogger(__name__)

svc_login = Service(
    name="api.login", permission=NO_PERMISSION_REQUIRED,
    path="/ui/login", cors_policy=cors.POLICY)

svc_logout = Service(
    name="api.logout", permission=NO_PERMISSION_REQUIRED,
    path="/ui/logout", cors_policy=cors.POLICY)

svc_whoami = Service(
    name="api.whoami", permission=NO_PERMISSION_REQUIRED,
    path="/ui/whoami", cors_policy=cors.POLICY)


@svc_login.post(require_csrf=False)
def login(request):
    login = request.json_body['login']
    passwd = request.json_body['password']
    role = request.json_body['role']
    ret = None
    # TODO: Board role
    # Admin and VO role login
    if role == 0 or role == 3:
        user = UserMaster.by_login(request.dbsession, login)
        if user and user.check_password(passwd) and user.status == 1:
            headers = remember(request, login)
            request.response.headerlist.extend(headers)
            # set the new csrf token in response
            new_csrf_token(request)
            request.session["login"] = login
            request.session["name"] = user.name
            request.session["id"] = user.id
            request.session["role"] = user.role
            request.session["title"] = user.title
            request.session["token"] = new_csrf_token(request)
            ret = compute_whoami(request, login)
        else:
            headers = forget(request)
            request.response.headerlist.extend(headers)
            ret = compute_whoami(request, None)

    elif role == 4:
        user = BoardMaster.by_login(request.dbsession, login)
        if user and user.check_password(passwd) and user.status == 1:
            headers = remember(request, login)
            request.response.headerlist.extend(headers)
            # set the new csrf token in response
            new_csrf_token(request)
            request.session["login"] = login
            request.session["board_name"] = user.board_name
            request.session["id"] = user.id
            request.session["no_of_members"] = user.no_of_members
            request.session["role"] = 4
            request.session["token"] = new_csrf_token(request)
            ret = compute_whoami(request, login)
        else:
            headers = forget(request)
            request.response.headerlist.extend(headers)
            ret = compute_whoami(request, None)

    return ret


@svc_logout.post(require_csrf=False)
def logout(request):
    headers = forget(request)
    request.response.headerlist.extend(headers)
    return {
        "code": 0,
        "message": "success",
        "data": {}
    }


@svc_whoami.get()
def whoami(request):
    login = request.authenticated_userid
    return compute_whoami(request, login)


def compute_whoami(request, login):
    result = {
        'authenticated': False,
        'login': None,
    }

    if login is None:
        return result

    if request.session['role'] == 0 or request.session['role'] == 3:
        result['authenticated'] = True
        result['login'] = request.session['login']
        result['name'] = request.session['name']
        result['id'] = request.session['id']
        result['role'] = request.session['role']
        result['title'] = request.session['title']
        result['token'] = request.session['token']
    elif request.session['role'] == 4:
        result['authenticated'] = True
        result['login'] = request.session['login']
        result['board_name'] = request.session['board_name']
        result['id'] = request.session['id']
        result['role'] = request.session['role']
        result['no_of_members'] = request.session['no_of_members']
        result['token'] = request.session['token']
    return result

# Local Variables:
# mode: python
# End:
