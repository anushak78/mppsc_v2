from sqlalchemy import (
    Column,
    Integer,
    Text,
    ForeignKey,
)

from .meta import Base


class UserMaster(Base):
    __tablename__ = 'user_master'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    role = Column(Integer)
    title = Column(Integer)
    designation = Column(Text)
    status = Column(Text)


class UserFingerPrintMap(Base):
    __tablename__ = 'user_fingerprint'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('user_master.id'))
    file_name = Column(Text)


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
