from pyramid.config import Configurator


def main(global_config, **settings):
    """ This function returns a Pyramid WSGI application.
    """
    with Configurator(settings=settings) as config:
        config.include('.models')
        config.include('cornice')
        config.include('pyramid_tm')
        config.include('pyramid_jinja2')
        config.include('.routes')
        config.add_route('home', '/home')
        config.add_static_view('/home', settings.get('client_url'))
        config.scan()
    return config.make_wsgi_app()