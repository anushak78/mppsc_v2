import { BoardMaster } from 'src/app/board-master/model/board-master.model';
import { UserMaster } from 'src/app/user-master/model/UserMaster';

export class DatesRange {
    interviewId: number;
    fromDate: Date;
    toDate: Date;
    verificationOfficer: UserMaster[] = [];
    boardMaster: BoardMaster[] = [];
    
    static fromJson(data: Map<string, any>): DatesRange {
        const u: DatesRange = new DatesRange();
        u.interviewId = data['id'];
        u.fromDate = new Date(data['from_date']);
        u.toDate = new Date(data['to_date']);
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['id'] = this.interviewId;
        data['from_date'] = this.fromDate;
        data['to_date'] = this.toDate;
        data['boardMaster'] = this.boardMaster;
        data['verificationOfficer'] = this.verificationOfficer;
        return data;
    }
}
