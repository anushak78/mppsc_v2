export class Marks {
    marks_type: number;
    min_marks_unreserved: number;
    max_marks_unreserved: number;
    min_marks_ews: number;
    max_marks_ews: number;
    min_marks_obc: number;
    max_marks_obc: number;
    min_marks_st: number;
    max_marks_st: number;
    min_marks_sc: number;
    max_marks_sc: number;
    interview_id: number;

    static fromJson(data: Map<string, any>): Marks {
        const u: Marks = new Marks();
        // u.marks_type = data['marks_type'];
        // u.min_marks = data['min_marks'];
        // u.max_marks = data['max_marks'];
        // u.interview_id = data['interview_id'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();

        data['interview_id'] = this.interview_id;

        data['min_marks_unreserved'] = this.min_marks_unreserved;
        data['max_marks_unreserved'] = this.max_marks_unreserved;

        data['min_marks_ews'] = this.min_marks_ews;
        data['max_marks_ews'] = this.max_marks_ews;

        data['min_marks_obc'] = this.min_marks_obc;
        data['max_marks_obc'] = this.max_marks_obc;

        data['min_marks_st'] = this.min_marks_st;
        data['max_marks_st'] = this.max_marks_st;

        data['min_marks_sc'] = this.min_marks_sc;
        data['max_marks_sc'] = this.max_marks_sc;


        return data;
    }
}

