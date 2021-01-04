import argparse
import sys

from pyramid.paster import bootstrap, setup_logging, get_appsettings
from sqlalchemy.exc import OperationalError
from sqlalchemy import engine_from_config

from .. import models
from ..models.meta import Base, DBSession
from ..models import (
    get_engine,
    get_session_factory,
    get_tm_session,
)
import transaction


def setup_models(dbsession):
    """
    Add or update models / fixtures in the database.

    """
    #model = models.mymodel.MyModel(name='one', value=1)
    user = models.usermaster.UserMaster(name='Admin', login='Admin', role=0, title=0, designation='Admin', status=1)
    user.set_password('a')
    dbsession.add(user)


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
    engine = get_engine(settings)
    Base.metadata.drop_all(engine)
    initialize_db(engine)
 
def initialize_db(engine):
    Base.metadata.create_all(engine)
    session_factory = get_session_factory(engine)
    with transaction.manager:
        dbsession = get_tm_session(
            session_factory, transaction.manager)
        setup_models(dbsession)