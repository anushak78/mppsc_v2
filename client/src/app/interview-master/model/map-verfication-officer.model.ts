export class MapVerficationOfficer {
    fromDate: Date;
    toDate: Date;
    checked: boolean;
    officer: string

    static fromJson(data: Map<string, any>): MapVerficationOfficer {
        const u: MapVerficationOfficer = new MapVerficationOfficer();
        u.fromDate = new Date(data['from_date']);
        u.toDate = new Date(data['to_date']);
        u.checked = data['checked'];
        u.officer = data['officer'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['from_date'] = this.fromDate;
        data['to_date'] = this.toDate;
        data['officer'] = this.officer
        data['checked'] = this.checked;
        return data;
    }
}
