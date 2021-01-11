import { DatesRange } from './dates-range.model';

export class VerificationOfficer {
    interviewId: string;
    officer: string;
    officerId: number;
    checked: boolean = false;
    dates: DatesRange[] = [];
    date: DatesRange = new DatesRange();

    static fromJson(data: Map<string, any>): VerificationOfficer {
        const u: VerificationOfficer = new VerificationOfficer();
        u.officer = data['officer'];
        u.officerId = data['officerId'];
        u.interviewId = data['interview_id'];
        for (const l of data['dates']) {
            u.dates.push(DatesRange.fromJson(l));
        }
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['officer'] = this.officer;
        data['officerId'] = this.officerId;
        data['interview_id'] = this.interviewId;
        data['date'] = this.date.toJSON().set("checked",this.checked)
        return data;
    }
}
