from sqlalchemy import (
    Column,
    Integer,
    Text,
    ForeignKey
)

from .meta import Base


class VerificationStatus(Base):
    __tablename__ = 'vo_status'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer, ForeignKey('board_interview_map.id'))
    user_id = Column(Integer, ForeignKey('user_master.id'))
    cand_id = Column(Integer, ForeignKey('candidate_master.id'))
    status = Column(Integer)

    def __init__(self, boardmap_id, user_id, cand_id, status):
        self.boardmap_id = boardmap_id
        self.user_id = user_id
        self.cand_id = cand_id
        self.status = status


class VerificationAnswers(Base):
    __tablename__ = 'vo_answers'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer, ForeignKey('board_interview_map.id'))
    user_id = Column(Integer, ForeignKey('user_master.id'))
    cand_id = Column(Integer, ForeignKey('candidate_master.id'))
    ques_id = Column(Integer, ForeignKey('question_master.id'))
    ans_id = Column(Integer, ForeignKey('answer_master.id'))

    def __init__(self, boardmap_id, user_id, cand_id, ques_id, ans_id):
        self.boardmap_id = boardmap_id
        self.user_id = user_id
        self.cand_id = cand_id
        self.ques_id = ques_id
        self.ans_id = ans_id