export class Marks {
    minMarksUnreserved: number;
    maxMarksUnreserved: number;
    minMarksEws: number;
    maxMarksEws: number;
    minMarksObc: number;
    maxMarksObc: number;
    minMarksSt: number;
    maxMarksSt: number;
    minMarksSc: number;
    maxMarksSc: number;
    interviewId: number;

    static fromJson(data: Map<string, any>): Marks {
        const u: Marks = new Marks();
        u.interviewId = data['interview_id']
        u.minMarksUnreserved = data['min_marks_unreserved'];
        u.maxMarksUnreserved = data['max_marks_unreserved'];
        u.minMarksEws = data['min_marks_ews'];
        u.maxMarksEws = data['max_marks_ews'];
        u.minMarksObc = data['min_marks_obc'];
        u.maxMarksObc = data['max_marks_obc'];
        u.minMarksSt = data['min_marks_st'];
        u.maxMarksSt = data['max_marks_st'];
        u.minMarksSc = data['min_marks_sc'];
        u.maxMarksSc = data['max_marks_sc'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['interviewId'] = this.interviewId;
        data['min_marks_unreserved'] = this.minMarksUnreserved;
        data['max_marks_unreserved'] = this.maxMarksUnreserved;
        data['min_marks_ews'] = this.minMarksEws;
        data['max_marks_ews'] = this.maxMarksEws;
        data['min_marks_obc'] = this.minMarksObc;
        data['max_marks_obc'] = this.maxMarksObc;
        data['min_marks_st'] = this.minMarksSt;
        data['max_marks_st'] = this.maxMarksSt;
        data['min_marks_sc'] = this.minMarksSc;
        data['max_marks_sc'] = this.maxMarksSc;
        return data;
    }
}

