import argparse
import sys

from pyramid.paster import bootstrap, setup_logging, get_appsettings
from sqlalchemy.exc import OperationalError
from sqlalchemy import engine_from_config

from .. import models
from ..models.meta import Base


def setup_models(dbsession):
    """
    Add or update models / fixtures in the database.

    """
    model = models.mymodel.MyModel(name='one', value=1)
    dbsession.add(model)


def parse_args(argv):
    parser = argparse.ArgumentParser()
    parser.add_argument(
        'config_uri',
        help='Configuration file, e.g., development.ini',
    )
    return parser.parse_args(argv[1:])


def main(argv=sys.argv):
    args = parse_args(argv)
    setup_logging(args.config_uri)
    env = bootstrap(args.config_uri)
    settings = get_appsettings(args.config_uri)
    engine = engine_from_config(settings, 'sqlalchemy.')
    Base.metadata.create_all(engine)

    try:
        with env['request'].tm:
            dbsession = env['request'].dbsession
            setup_models(dbsession)
    except OperationalError:
        print('''
Pyramid is having a problem using your SQL database.  The problem
might be caused by one of the following things:

1.  You may need to initialize your database tables with `alembic`.
    Check your README.txt for description and try to run it.

2.  Your database server may not be running.  Check that the
    database server referred to by the "sqlalchemy.url" setting in
    your "development.ini" file is running.
            ''')
