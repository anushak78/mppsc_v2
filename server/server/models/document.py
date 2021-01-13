from sqlalchemy import (
    Column,
    Index,
    Integer,
    Text,
    ForeignKey,
)

from .meta import Base


class DocumentMaster(Base):
    __tablename__ = 'document_master'
    id = Column(Integer, primary_key=True)
    doc_name = Column(Text)

    def __init__(self, doc_name):
        self.doc_name = doc_name


class QuestionMaster(Base):
    __tablename__ = 'question_master'
    id = Column(Integer, primary_key=True)
    doc_id = Column(Integer, ForeignKey('document_master.id'))
    question_text = Column(Text)

    def __init__(self, doc_id, question_text):
        self.doc_id = question_text
        self.question_text = question_text


class AnswerMaster(Base):
    __tablename__ = 'answer_master'
    id = Column(Integer, primary_key=True)
    ques_id = Column(Integer, ForeignKey('question_master.id'))
    answer_text = Column(Text)
    option_no = Column(Integer)

    def __init__(self, ques_id, answer_text, option_no):
        self.ques_id = ques_id
        self.answer_text = answer_text
        self.option_no = option_no