import { BoardInterview } from './board-interview.model';
import { ChairmanBoard } from './chairman-board.model';
import { DatesRange } from './dates-range.model';
import { Marks } from './marks.model';
import { VerificationOfficer } from './verification-officer.model';

export class InterviewMaster {
    interviewId: number;
    name: string;
    notificationNo: number;
    status = 1;
    dates = [];
    // date: DatesRange = new DatesRange();
    marks: Marks = new Marks();
    verificationOfficer: VerificationOfficer = new VerificationOfficer();
    boardInterview: BoardInterview = new BoardInterview();
    chairmanBoard: ChairmanBoard = new ChairmanBoard();

    static fromJson(data: Map<string, any>): InterviewMaster {
        const u: InterviewMaster = new InterviewMaster();
        u.interviewId = data['interview_id'];
        u.name = data['name'];
        u.notificationNo = data['notification_no'];
        u.status = data['status'];
        for (const l of data['dates']) {
            u.dates.push(DatesRange.fromJson(l));
        }
        u.marks = data['marks'];
        u.verificationOfficer = data['verificationOfficer'];
        u.boardInterview = data['boardOfficer'];
        u.chairmanBoard = data['chairmanBoard']
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['interview_id'] = this.interviewId;
        data['name'] = this.name;
        data['notification_no'] = this.notificationNo;
        data['status'] = this.status;
        // {
        //     data['date'] = this.date;
        // }
        // data['date'] = this.date;
        // data['marks'] = this.marks;
        // data['verification_officer'] = this.verificationOfficer;
        // data['boardInterview'] = this.boardInterview;
        // data['chairmanBoard']= this.chairmanBoard;
        return data;
    }
}
