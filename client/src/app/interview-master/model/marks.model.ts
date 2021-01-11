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
        u.minMarksUnreserved = data['minMarksUnreserved'];
        u.maxMarksUnreserved = data['maxMarksUnreserved '];
        u.minMarksEws = data['minMarksEws'];
        u.maxMarksEws = data['maxMarksEws'];
        u.minMarksObc = data['minMarksObc'];
        u.maxMarksObc = data['maxMarksObc'];
        u.minMarksSt = data['minMarksSt'];
        u.maxMarksSt = data['maxMarksSt'];
        u.minMarksSc = data['minMarksSc'];
        u.maxMarksSc = data['maxMarksSc'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['minMarksUnreserved'] = this.interviewId;
        data['minMarksUnreserved'] = this.minMarksUnreserved;
        data['maxMarksUnreserved '] = this.maxMarksUnreserved;
        data['minMarksEws'] = this.minMarksEws;
        data['maxMarksEws'] = this.maxMarksEws;
        data['minMarksObc'] = this.minMarksObc;
        data['maxMarksObc'] = this.maxMarksObc;
        data['minMarksSt'] = this.minMarksSt;
        data['maxMarksSt'] = this.maxMarksSt;
        data['minMarksSc'] = this.minMarksSc;
        data['maxMarksSc'] = this.maxMarksSc;
        return data;
    }
}

