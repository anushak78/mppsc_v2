from sqlalchemy import (
    Column,
    Integer,
    Text,
)
from .meta import Base


class CandidateMaster(Base):
    __tablename__ = 'candidate_master'
    id = Column(Integer, primary_key=True)
    application_no = Column(Text)
    roll_no = Column(Text)
    name = Column(Text)
    gender = Column(Text)
    category = Column(Text)
    ph_status = Column(Text)
    interview_id = Column(Integer)
    board_id = Column(Integer)

    def __init__(self, application_no, roll_no, name, gender, category, ph_status, interview_id):
        self.application_no = application_no
        self.roll_no = roll_no
        self.name = name
        self.gender = gender
        self.category = category
        self.ph_status = ph_status
        self.interview_id = interview_id

    @classmethod
    def check_appl_no(cls, DBSession, appl_list):
        return DBSession.query(CandidateMaster).filter(
            CandidateMaster.application_no.in_(tuple(appl_list))).all()

    @classmethod
    def check_roll_no(cls, DBSession, roll_list):
        return DBSession.query(CandidateMaster).filter(
            CandidateMaster.roll_no.in_(tuple(roll_list))).all()

    @classmethod
    def fetch_data(cls, DBSession, application_no, roll_no):
        return DBSession.query(CandidateMaster).filter(
            CandidateMaster.roll_no==roll_no, 
            CandidateMaster.application_no==application_no).first()
        