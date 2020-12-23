from sqlalchemy import (
    Column,
    Integer,
    Text,
)

from .meta import Base


class CandidateMaster(Base):
    __tablename__ = 'candidate_master'
    id = Column(Integer, primary_key=True)
    subject_name = Column(Text)

    def __init__(self, subject_name):
        self.subject_name = subject_name