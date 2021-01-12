import { UserMaster } from 'src/app/user-master/model/UserMaster';
import { DatesRange } from './dates-range.model';

export class VerificationOfficer {
    dates : Date;
    verificationOffice: UserMaster[] = [];
    // date: DatesRange = new DatesRange();
    checked: boolean = false;
    static fromJson(data: Map<string, any>): VerificationOfficer {
        const u: VerificationOfficer = new VerificationOfficer();
        //u.interviewId = data['interview_id'];
        // for (const l of data['dates']) {
        //     u.dates.push(DatesRange.fromJson(l));
        // }
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        // data['officer'] = this.officer;
        // data['officerId'] = this.officerId;
        // data['interview_id'] = this.interviewId;
        // data['date'] = this.date.toJSON().set("checked",this.checked)
        data['dates']=this.dates;

        return data;
    }
}
