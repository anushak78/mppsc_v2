from sqlalchemy import (
    Column,
    Integer,
    Text,
)
import hashlib
import six
from .meta import Base


class BoardMaster(Base):
    __tablename__ = 'board_master'
    id = Column(Integer, primary_key=True)
    subject_name = Column(Text)
    no_of_members = Column(Integer)
    login_id = Column(Text)
    password = Column(Text)
    status = Column(Text)

    def __init__(self, subject_name, no_of_members, login_id, status):
        self.login_id = login_id
        self.subject_name = subject_name
        self.no_of_members = no_of_members
        self.status = status

    def set_password(self, password):
        self.password = _sha512(password)

    @classmethod
    def get_boards(cls, DBSession):
        return DBSession.query(BoardMaster).all()

    @classmethod
    def get_board(cls, DBSession, login_id):
        return DBSession.query(BoardMaster).filter_by(id=id).first()

    @classmethod
    def check_board(cls, DBSession, login_id):
        return DBSession.query(BoardMaster).filter_by(login_id=login_id).first()

    @classmethod
    def delete_board(cls, DBSession, id):
        DBSession.query(BoardMaster).filter_by(id=id).delete()
        return true


def _sha512(text):
    sha = hashlib.sha512()
    sha.update(six.b(text))
    return sha.hexdigest()