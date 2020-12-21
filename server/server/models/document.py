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


class QuestionMaster(Base):
    __tablename__ = 'question_master'
    id = Column(Integer, primary_key=True)
    doc_id = Column(Integer, ForeignKey('document_master.id'))
    question_text = Column(Text)


class AnswerMaster(Base):
    __tablename__ = 'answer_master'
    id = Column(Integer, primary_key=True)
    ques_id = Column(Integer, ForeignKey('question_master.id'))
    answer_text = Column(Text)