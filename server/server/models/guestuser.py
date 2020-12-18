from sqlalchemy import (
    Column,
    Integer,
    Text,
    DateTime
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


class GuestUserDateMap(Base):
    __tablename__ = 'guest_date_map'
    id = Column(Integer, primary_key=True)
    guest_id = Column(Integer)
    to_date = Column(DateTime)
    from_date = Column(DateTime)