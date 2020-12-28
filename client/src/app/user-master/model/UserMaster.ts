export class UserMaster {
  id: number;
  name: string;
  title: string;
  role: string;
  userId: string;
  password: string;
  confirmPassword: string;

  static fromJson(data: Map<string, any>): UserMaster {
    const u: UserMaster = new UserMaster();
    u.id = data['id'];
    u.name = data['name'];
    u.title = data['title'];
    u.role = data['role'];
    return u;
  }

  toJSON(): Map<string, any> {
    const data: Map<string, any> = new Map<string, any>();
    data['id'] = this.id;
    data['name'] = this.name;
    data['title'] = this.title;
    data['role'] = this.role;
    data['password'] = this.password;
    data['confirm-password'] = this.confirmPassword;
    return data;
  }
}
