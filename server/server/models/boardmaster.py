from sqlalchemy import (
    Column,
    Integer,
    Text,
)
import hashlib
import six
from .meta import Base


class BoardMaster(Base):
    __tablename__ = 'board_master'
    id = Column(Integer, primary_key=True)
    board_name = Column(Text)
    no_of_members = Column(Integer)
    login_id = Column(Text)
    password = Column(Text)
    status = Column(Integer)

    def __init__(self, board_name, no_of_members, login_id, status):
        self.login_id = login_id
        self.board_name = board_name
        self.no_of_members = no_of_members
        self.status = status

    def set_password(self, password):
        self.password = _sha512(password)

    @classmethod
    def get_boards(cls, DBSession):
        boards = DBSession.query(BoardMaster).all()
        board_list = []
        for ele in boards:
            board_list.append({
                "id": ele.id,
                "login_id": ele.login_id,
                "password": ele.password,
                "status": ele.status,
                "no_of_members": ele.no_of_members,
                "board_name": ele.board_name
            })
        return board_list

    @classmethod
    def get_board(cls, DBSession, id):
        board = DBSession.query(BoardMaster).filter_by(id=id).first()
        board_details = {
            "id": board.id,
            "login_id": board.login_id,
            "password": board.password,
            "status": board.status,
            "no_of_members": board.no_of_members,
            "board_name": board.board_name
        }
        return board_details

    @classmethod
    def check_board(cls, DBSession, login_id):
        return DBSession.query(BoardMaster).filter_by(login_id=login_id).first()

    @classmethod
    def delete_board(cls, DBSession, id):
        DBSession.query(BoardMaster).filter_by(id=id).delete()
        return true


def _sha512(text):
    sha = hashlib.sha512()
    sha.update(six.b(text))
    return sha.hexdigest()
