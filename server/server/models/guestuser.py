from sqlalchemy import (
    Column,
    Integer,
    Text,
    DateTime,
    ForeignKey
)

from .meta import Base


class GuestUserMaster(Base):
    __tablename__ = 'guest_user_master'
    id = Column(Integer, primary_key=True)
    title = Column(Integer)
    name = Column(Text)
    email = Column(Text)
    phone_no = Column(Text)
    status = Column(Text)

    def __init__(self, title, name, email, phone_no, status):
        self.title = title
        self.name = name
        self.email = email
        self.phone_no = phone_no
        self.status = status

    @classmethod
    def get_users(cls, DBSession):
        return DBSession.query(GuestUserMaster).all()


class GuestUserDateMap(Base):
    __tablename__ = 'guest_date_map'
    id = Column(Integer, primary_key=True)
    guest_id = Column(Integer, ForeignKey('guest_user_master.id'))
    to_date = Column(DateTime)
    from_date = Column(DateTime)

    def __init__(self, guest_id, to_date, from_date):
        self.guest_id = guest_id
        self.to_date = to_date
        self.from_date = from_date