from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from .meta import Base


class BoardStatus(Base):
    __tablename__ = 'board_status'
    id = Column(Integer, primary_key=True)
    boardmap_id = Column(Integer)
    cand_id = Column(Integer)
    status = Column(Integer)
    marks = Column(Integer)