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

    def __init__(self, name, notification_no, to_date, from_date, status):
        self.notification_no = notification_no
        self.name = name
        self.to_date = to_date
        self.from_date = from_date
        self.status = status

    @classmethod
    def get_interviews(cls, DBSession):
        return DBSession.query(InterviewMaster).all()


class BoardInterviewMap(Base):
    __tablename__ = 'board_interview_map'
    id = Column(Integer, primary_key=True)
    interview_id = Column(Integer, ForeignKey('interview_master.id'))
    board_id = Column(Integer, ForeignKey('board_master.id'))
    date = Column(DateTime)

    def __init__(self, interview_id, board_id, date):
        self.interview_id = interview_id
        self.board_id = board_id
        self.status = status


class BoardUserMap(Base):
    __tablename__ = 'board_user_map'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer, ForeignKey('board_interview_map.id'))
    user_id = Column(Integer)
    user_role = Column(Integer)

    def __init__(self, boardmap_id, user_id, user_role):
        self.boardmap_id = boardmap_id
        self.user_id = user_id
        self.user_role = user_role