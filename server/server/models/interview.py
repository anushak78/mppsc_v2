from sqlalchemy import (
    Column,
    Integer,
    Text,
    DateTime,
    ForeignKey
)

from .meta import Base


class InterviewMaster(Base):
    __tablename__ = 'interview_master'
    id = Column(Integer, primary_key=True)
    name = Column(Text)
    notification_no = Column(Text)
    to_date = Column(DateTime)
    from_date = Column(DateTime)
    status = Column(Text)


class BoardInterviewMap(Base):
    __tablename__ = 'board_interview_map'
    id = Column(Integer, primary_key=True)
    interview_id = Column(Integer, ForeignKey('interview_master.id'))
    board_id = Column(Integer, ForeignKey('board_master.id'))
    date = Column(DateTime)


class BoardUserMap(Base):
    __tablename__ = 'board_user_map'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer, ForeignKey('board_interview_map.id'))
    user_id = Column(Integer)
    user_role = Column(Integer)