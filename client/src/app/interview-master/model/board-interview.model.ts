import { DatesRange } from './dates-range.model';

export class BoardInterview {
    interviewId: string;
    boardName: string;
    boardId: number;
    checked: boolean = false;
    dates: DatesRange[] = [];
    date: DatesRange = new DatesRange();

    static fromJson(data: Map<string, any>): BoardInterview {
        const u: BoardInterview = new BoardInterview();
        u.interviewId = data['interview_id']
        u.boardName = data['boardName'];
        u.boardId = data['board_id'];
        for (const l of data['dates']) {
            u.dates.push(DatesRange.fromJson(l));
        }
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['board_name'] = this.boardName;
        data['board_id'] = this.boardId;
        data['interview_id'] = this.interviewId
        data['dates'] = this.date.toJSON().set("checked", this.checked)
        return data;
    }
}
