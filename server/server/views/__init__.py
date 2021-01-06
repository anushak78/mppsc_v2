from pyramid.response import FileResponse
import logging
import os
log = logging.getLogger(__name__)

from pyramid.view import (
    view_config
    )

from .views import home_view

'''@view_config(route_name='home')
def home_view(request):
    log.debug('In home view')
    folder_name = request.registry.settings['client_url']
    response = FileResponse(os.path.join(folder_name,'index.html'), \
                            request=request, content_type='text/html')
    return response'''

def includeme(config):
    config.add_route('home', '/')
    config.add_route('index', '/index.html')
    config.commit()
    config.add_notfound_view(home_view)
