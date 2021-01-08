export class InterviewMaster {
    interview_id: number;
    name: string;
    notification_no: number;
    status = 1;
   
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
        return data;
    }
}
