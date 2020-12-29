export class BoardMaster {
    subject_name: string;
    board_id: string;
    no_of_members: number;
    login: string;
    password: string;
    confirm_password: string;
    status: string;

    static fromJson(data: Map<string, any>): BoardMaster {
        const u: BoardMaster = new BoardMaster();
        u.subject_name = data['subject_name'];
        u.board_id = data['board_id'];
        u.no_of_members = data['no_of_members'];
        u.status = data['status'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['subject_name'] = this.subject_name;
        data['board_id'] = this.board_id;
        data['no_of_members'] = this.no_of_members;
        data['status'] = this.status;
        data['password'] = this.password;
        data['confirm_password'] = this.confirm_password;
        return data;
    }
}

