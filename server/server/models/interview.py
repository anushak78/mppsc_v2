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
    status = Column(Integer)

    def __init__(self, name, notification_no, status):
        self.notification_no = notification_no
        self.name = name
        self.status = status

    @classmethod
    def get_interviews(cls, DBSession):
        return DBSession.query(InterviewMaster).all()

    @classmethod
    def get_interview(cls, DBSession, id):
        return DBSession.query(InterviewMaster).filter_by(id=id).first()


class InterviewDatesMaster(Base):
    __tablename__ = 'interview_dates_master'
    id = Column(Integer, primary_key=True)
    to_date = Column(DateTime)
    from_date = Column(DateTime)
    interview_id = Column(Integer, ForeignKey('interview_master.id'))

    def __init__(self, interview_id, to_date, from_date):
        self.interview_id = interview_id
        self.to_date = to_date
        self.from_date = from_date

    @classmethod
    def get_interview_dates(cls, DBSession, id):
        dates = DBSession.query(InterviewDatesMaster).filter_by(interview_id=id).all()
        date_list = []
        for ele in dates:
            date_list({
                "id": ele.id,
                "to_date": str(ele.to_date),
                "from_date": str(ele.from_date),
                "interview_id": ele.interview_id
            })
        return date_list


class InterviewMarksMaster(Base):
    __tablename__ = 'interview_master_dates'
    id = Column(Integer, primary_key=True)
    marks_type = Column(Integer)
    min_marks = Column(Integer)
    max_marks = Column(Integer)
    interview_id = Column(Integer, ForeignKey('interview_master.id'))

    def __init__(self, interview_id, marks_type, min_marks, max_marks):
        self.interview_id = interview_id
        self.marks_type = marks_type
        self.min_marks = min_marks
        self.max_marks = max_marks

    @classmethod
    def get_interview_marks(cls, DBSession, id):
        marks = DBSession.query(InterviewMarksMaster).filter_by(interview_id=id).all()
        mark_list = []
        for ele in marks:
            date_list({
                "id": ele.id,
                "marks_type": ele.marks_type,
                "min_marks": ele.min_marks,
                "max_marks": ele.max_marks
                "interview_id": ele.interview_id
            })
        return mark_list


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

    @classmethod
    def get_interview_board(cls, DBSession, id):
        boards = DBSession.query(BoardInterviewMap).filter_by(interview_id=id).all()
        board_list = []
        for ele in boards:
            board_list({
                "id": ele.id,
                "board_id": ele.board_id,
                "date": str(ele.date),
                "interview_id": ele.interview_id
            })
        return board_list


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