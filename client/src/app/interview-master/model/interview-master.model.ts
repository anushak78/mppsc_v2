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
   dates  = []
   // dates: DatesRange = new DatesRange();
    marks: Marks = new Marks();
    chairmanBoard: ChairmanBoard = new ChairmanBoard();
    // date: DatesRange = new DatesRange();


    static fromJson(data: Map<string, any>): InterviewMaster {
        const u: InterviewMaster = new InterviewMaster();
        u.interviewId = data['interview_id'];
        u.name = data['name'];
        u.notificationNo = data['notification_no'];
        u.status = data['status'];
        // for (const l of data['dates']) {
        //     u.dates.d
        // }
        u.dates = data['dates']
        u.marks = data['marks'];
        u.chairmanBoard = data['chairmanBoard']
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['interview_id'] = this.interviewId;
        data['name'] = this.name;
        data['notification_no'] = this.notificationNo;
        data['status'] = this.status;

        data['dates'] = this.dates;
        data['marks'] = this.marks.toJSON();
        return data;
    }
}
