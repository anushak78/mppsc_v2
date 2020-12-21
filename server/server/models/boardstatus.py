from sqlalchemy import (
    Column,
    Integer,
    Text,
    ForeignKey
)

from .meta import Base


class BoardStatus(Base):
    __tablename__ = 'board_status'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer, ForeignKey('board_interview_map.id'))
    cand_id = Column(Integer, ForeignKey('candidate_master.id'))
    status = Column(Integer)
    marks = Column(Integer)