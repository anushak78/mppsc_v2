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
    user_id = Column(Integer, ForeignKey('login_user_master.id'))
    cand_id = Column(Integer, ForeignKey('candidate_master.id'))
    status = Column(Integer)


class VerificationAnswers(Base):
    __tablename__ = 'vo_answers'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer, ForeignKey('board_interview_map.id'))
    user_id = Column(Integer, ForeignKey('login_user_master.id'))
    cand_id = Column(Integer, ForeignKey('candidate_master.id'))
    ques_id = Column(Integer, ForeignKey('question_master.id'))
    ans_id = Column(Integer, ForeignKey('answer_master.id'))