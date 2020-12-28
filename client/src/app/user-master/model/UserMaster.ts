export class UserMaster {
  id: number;
  name: string;
  title: Number;
  role: Number;
  userId: string;
  password: string;
  confirmPassword: string;
  status: string;

  static fromJson(data: Map<string, any>): UserMaster {
    const u: UserMaster = new UserMaster();
    u.id = data['id'];
    u.name = data['name'];
    u.title = data['title'];
    u.role = data['role'];
    u.status = data['status'];
    return u;
  }

  toJSON(): Map<string, any> {
    const data: Map<string, any> = new Map<string, any>();
    data['userId'] = this.userId;
    data['name'] = this.name;
    data['title'] = this.title;
    data['role'] = this.role;
    data['password'] = this.password;
    data['confirm-password'] = this.confirmPassword;
    return data;
  }
}
