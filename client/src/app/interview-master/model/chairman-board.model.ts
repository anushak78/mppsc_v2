import { GuestUserMaster } from 'src/app/guest-master/model/GuestUserMaster';

export class ChairmanBoard {
    chairmanBoardName: string;
    interviewId: string;
    checked: boolean = false;
    guestMember: GuestUserMaster[] = [];
    GuestUserMaster: GuestUserMaster[] = [];

    static fromJson(data: Map<string, any>): ChairmanBoard {
        const u: ChairmanBoard = new ChairmanBoard();
        u.chairmanBoardName = data['chairman_board'];
        u.interviewId = data['interview_id'];
        for (const l of data['guest']) {
            u.guestMember.push(GuestUserMaster.fromJson(l));
        }
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['chairman_board'] = this.chairmanBoardName;
        data['interview_id'] = this.interviewId;

        return data;
    }
}
