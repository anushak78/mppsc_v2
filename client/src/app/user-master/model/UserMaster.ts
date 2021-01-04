import {Roles, Status, Titles} from '../../constant';

export class UserMaster {
  id: number;
  name: string;
  title: number;
  role: number;
  userId: string;
  password: string;
  confirmPassword: string;
  status = 1;
  designation: string;

  static fromJson(data: Map<string, any>): UserMaster {
    const u: UserMaster = new UserMaster();
    u.id = data['id'];
    u.userId = data['login']
    u.name = data['name'];
    u.title = data['title'];
    u.role = data['role'];
    u.status = data['status'];
    u.designation = data['designation'];
    return u;
  }

  toJSON(): Map<string, any> {
    const data: Map<string, any> = new Map<string, any>();
    data['id'] = this.id;
    data['userId'] = this.userId;
    data['name'] = this.name;
    data['title'] = this.title;
    data['role'] = this.role;
    data['password'] = this.password;
    data['status'] = this.status;
    data['designation'] = this.designation;
    data['confirm-password'] = this.confirmPassword;
    return data;
  }
}
