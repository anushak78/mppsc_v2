from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from .meta import Base


class BoardMaster(Base):
    __tablename__ = 'board_master'
    id = Column(Integer, primary_key=True)
    subject_name = Column(Text)
    no_of_members = Column(Integer)
    login_id = Column(Text)
    password = Column(Text)
    status = Column(Text)