export class BoardMaster {
  id: number;
  boardName: string;
  noOfMembers: number;
  loginId: string;
  password: string;
  confirmPassword: string;
  status = 1;

  static fromJson(data: Map<string, any>): BoardMaster {
    const u: BoardMaster = new BoardMaster();
    u.id = data['id'];
    u.boardName = data['board_name'];
    u.noOfMembers = data['no_of_members'];
    u.loginId = data['login_id'];
    u.status = data['status'];
    return u;
  }

  toJSON(): Map<string, any> {
    const data: Map<string, any> = new Map<string, any>();
    data['id'] = this.id;
    data['board_name'] = this.boardName;
    data['login_id'] = this.loginId;
    data['no_of_members'] = this.noOfMembers;
    data['status'] = this.status;
    data['password'] = this.password;
    data['confirm_password'] = this.confirmPassword;
    return data;
  }
}

