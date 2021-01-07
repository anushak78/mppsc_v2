export class DatesRange {
    id: number;
    fromDate: Date;
    toDate: Date;

    static fromJson(data: Map<string, any>): DatesRange {
        const u: DatesRange = new DatesRange();
        u.id = data['id'];
        u.fromDate = new Date(data['from_date']);
        u.toDate = new Date(data['to_date']);
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['id'] = this.id;
        data['from_date'] = this.fromDate;
        data['to_date'] = this.toDate;
        return data;
    }
}
