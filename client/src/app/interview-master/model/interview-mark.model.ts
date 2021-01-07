export class InterviewMark {
    unreserved_max: number;
    unreserved_min: number;
    EWS_max: number;
    EWS_min: number;
    OBC_NCL_max: number;
    OBC_NCL_min: number;
    SC_max: number;
    SC_min: number;
    ST_max: number;
    ST_min: number;




    public constructor(init?: Partial<InterviewMark>) {
        Object.assign(this, init);
    }

    static fromJson(data: Map<string, any>): InterviewMark {
        const u: InterviewMark = new InterviewMark();
        u.unreserved_max = data['unreserved_max'];
        u.unreserved_min = data['unreserved_min'];
        u.EWS_max = data['EWS_max'];
        u.EWS_min = data['EWS_min'];
        u.OBC_NCL_max = data['OBC_NCL_max'];
        u.OBC_NCL_min = data['OBC_NCL_min'];
        u.SC_max = data['SC_max'];
        u.SC_min = data['SC_min'];
        u.ST_max = data['ST_max'];
        u.ST_min = data['ST_min'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();    
            data['unreserved_max'] = this.unreserved_max;
            data['unreserved_min'] = this.unreserved_min;
            data['EWS_max'] = this.EWS_max;
            data['EWS_min'] = this.EWS_min;
            data['OBC_NCL_max'] = this.OBC_NCL_max;
            data['OBC_NCL_min'] = this.OBC_NCL_min;
            data['SC_max'] = this.SC_max;
            data['SC_min'] = this.SC_min;
            data['ST_max'] = this.ST_max;
            data['ST_min'] = this.ST_min;
        return data;
    }
}
