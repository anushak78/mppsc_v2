export class InterviewMaster {
    interview_id: number;
    name: string;
    notification_no: number;
    status: string;
    // fromDate: any;
    // toDate: any;
    // unreserved_max: number;
    // unreserved_min: number;
    // EWS_max: number;
    // EWS_min: number;
    // OBC_NCL_max: number;
    // OBC_NCL_min: number;
    // SC_max: number;
    // SC_min: number;
    // ST_max: number;
    // ST_min: number;
    // verfication_officer: string;
    // interviewDatesOfficer: string;
    // boardName: string;
    // interviewDatesBoard: string
    // boardChairman: string;
    // member: string;

    public constructor(init?: Partial<InterviewMaster>) {
        Object.assign(this, init);
    }

    static fromJson(data: Map<string, any>): InterviewMaster {
        const u: InterviewMaster = new InterviewMaster();
        u.interview_id = data['interview_id'];
        u.name = data['name'];
        u.notification_no = data['notification_no'];
        u.status = data['status'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();    
            data['interview_id'] = this.interview_id;
            data['name'] = this.name;
            data['notification_no'] = this.notification_no;
            data['status'] = this.status
        // {
        //     data['fromDate'] = this.fromDate;
        //     data['toDate'] = this.toDate;
        // }
        // {
        //     data['unreserved_max'] = this.unreserved_max;
        //     data['unreserved_min'] = this.unreserved_min;
        //     data['EWS_max'] = this.EWS_max;
        //     data['EWS_min'] = this.EWS_min;
        //     data['OBC_NCL_max'] = this.OBC_NCL_max;
        //     data['OBC_NCL_min'] = this.OBC_NCL_min;
        //     data['SC_max'] = this.SC_max;
        //     data['SC_min'] = this.SC_min;
        //     data['ST_max'] = this.ST_max;
        //     data['ST_min'] = this.ST_min;
        // }
        // {
        //     data['verfication_officer'] = this.verfication_officer;
        //     data['interviewDatesOfficer'] = this.interviewDatesOfficer;
        // }
        // {
        //     data['boardName'] = this.boardName;
        //     data['interviewDatesBoard'] = this.interviewDatesBoard;
        // }
        // {
        //     data['boardChairman'] = this.boardChairman;
        //     data['member'] = this.member;
        // }
        return data;
    }
}
