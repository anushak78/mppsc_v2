from sqlalchemy import (
    Column,
    Integer,
    Text,
    ForeignKey,
)
import hashlib
import six
from .meta import Base


class UserMaster(Base):
    __tablename__ = 'user_master'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    role = Column(Integer)
    title = Column(Integer)
    designation = Column(Text)
    status = Column(Text)

    def __init__(self, name, role, title, designation, status):
        self.name = name
        self.role = role
        self.title = title
        self.designation = designation
        self.status = status

    @classmethod
    def get_users(cls, DBSession):
        return DBSession.query(UserMaster).all()


class UserFingerPrintMap(Base):
    __tablename__ = 'user_fingerprint'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user_master.id'))
    file_name = Column(Text)

    def __init__(self, user_id, file_name):
        self.user_id = user_id
        self.file_name = file_name


class UserLoginMaster(Base):
    __tablename__ = 'login_user_master'
    id = Column(Integer, primary_key=True)
    login = Column(Text)
    password = Column(Text)
    name = Column(Text)
    role = Column(Integer)
    title = Column(Integer)
    designation = Column(Text)
    status = Column(Text)

    def __init__(self, login, name, role, title, designation, status):
        self.login = login
        self.name = name
        self.role = role
        self.title = title
        self.designation = designation
        self.status = status

    def set_password(self, password):
        self.password = _sha512(password)

    def check_password(self, password):
        return self.password == _sha512(password)

    @classmethod
    def by_login(cls, DBSession, login):
        return DBSession.query(UserLoginMaster).filter_by(login=login).first()

    @classmethod
    def get_vo_users(cls, DBSession):
        return DBSession.query(UserMaster).filter_by(role=1).all()


def _sha512(text):
    sha = hashlib.sha512()
    sha.update(six.b(text))
    return sha.hexdigest()
