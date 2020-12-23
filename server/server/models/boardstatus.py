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

    def __init__(self, boardmap_id, cand_id, status, marks):
        self.boardmap_id = boardmap_id
        self.cand_id = cand_id
        self.status = status
        self.marks = marks