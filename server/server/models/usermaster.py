from sqlalchemy import (
    Column,
    Integer,
    Text,
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
    user_id = Column(Integer)
    file_name = Column(Text)