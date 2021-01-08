import { BoardMaster } from 'src/app/board-master/model/board-master.model';
import { DatesRange } from 'src/app/guest-master/model/DatesRange';

export class BoardInterviewMap {
    interview_id: number;
    checked: boolean
    board_id: number;
    board: BoardMaster;
    dates: DatesRange[] = [];
    fromDate: Date;
    toDate: Date;
    // fromDate: Date;
    // toDate: Date;
    // {id: , boards: [{'board_id': , date: ''}]
    static fromJson(data: Map<string, any>): BoardInterviewMap {
        const u: BoardInterviewMap = new BoardInterviewMap();
        u.interview_id = data['interview_id'];
        u.board_id = data['board_id'];
        for (const l of data['dates']) {
            u.dates.push(DatesRange.fromJson(l));
        }

        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['interview_id'] = this.interview_id;
        data['board_id'] = this.board.id;
        return data;
    }
}
