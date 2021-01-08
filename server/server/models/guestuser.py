from sqlalchemy import (
    Column,
    Integer,
    Text,
    DateTime,
    ForeignKey
)
from sqlalchemy import or_, not_

from .meta import Base


class GuestUserMaster(Base):
    __tablename__ = 'guest_user_master'
    id = Column(Integer, primary_key=True)
    title = Column(Integer)
    name = Column(Text)
    email = Column(Text)
    phone_no = Column(Text)
    status = Column(Integer)

    def __init__(self, title, name, email, phone_no, status):
        self.title = title
        self.name = name
        self.email = email
        self.phone_no = phone_no
        self.status = status

    @classmethod
    def get_users(cls, DBSession):
        return DBSession.query(GuestUserMaster).all()

    @classmethod
    def get_user(cls, DBSession, id):
        return DBSession.query(GuestUserMaster).filter_by(id=id).first()

    @classmethod
    def check_user(cls, DBSession, email, phone_no):
        users = DBSession.query(GuestUserMaster).filter(
            or_(GuestUserMaster.email == email, GuestUserMaster.phone_no == phone_no))
        user_list = []
        for ele in users:
            user_list.append({
                "id": ele.id,
                "title": ele.title,
                "name": ele.name,
                "email": ele.email,
                "phone_no": ele.phone_no,
                "status": ele.status
            })
        return user_list

    @classmethod
    def get_first(cls, DBSession):
        first_id = DBSession.query(GuestUserMaster).order_by(GuestUserMaster.id.desc()).first()
        return first_id.id


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

    @classmethod
    def get_user_dates(cls, DBSession):
        return DBSession.query(GuestUserDateMap).all()

    @classmethod
    def get_user_date_details(cls, DBSession, guest_id):
        return DBSession.query(GuestUserDateMap).filter_by(guest_id=guest_id).all()

    @classmethod
    def filter_dates(cls, DBSession, date):
        to_date = date.to_date
        from_date = date.from_date
        user_dates = DBSession.query(GuestUserDateMap).filter(not_(
            GuestUserDateMap.to_date < from_date | GuestUserDateMap.from_date > to_date)).all()
        user_dates_list = []
        for ele in user_dates:
            user_dates_list.append({
                "id": ele.id,
                "guest_id": ele.guest_id
            })
        return user_dates_list
