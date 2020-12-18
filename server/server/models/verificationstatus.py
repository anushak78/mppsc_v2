from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from .meta import Base


class VerificationStatus(Base):
    __tablename__ = 'vo_status'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer)
    user_id = Column(Integer)
    cand_id = Column(Integer)
    status = Column(Integer)


class VerificationAnswers(Base):
    __tablename__ = 'vo_answers'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer)
    user_id = Column(Integer)
    cand_id = Column(Integer)
    ques_id = Column(Integer)
    ans_id = Column(Integer)