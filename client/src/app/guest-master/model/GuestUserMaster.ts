export class GuestUserMaster {
  id: number;
  name: string;
  title: Number;
  email: Number;
  phone_no: string;
  status: number;

  static fromJson(data: Map<string, any>): GuestUserMaster {
    const u: GuestUserMaster = new GuestUserMaster();
    u.id = data['id'];
    u.name = data['name'];
    u.title = data['title'];
    u.email = data['email'];
    u.phone_no = data['phone_no'];
    u.status = data['status'];
    return u;
  }

  toJSON(): Map<string, any> {
    const data: Map<string, any> = new Map<string, any>();
    data['name'] = this.name;
    data['status'] = this.status;
    data['title'] = this.title;
    data['email'] = this.email;
    data['phone_no'] = this.phone_no;
    return data;
  }
}
