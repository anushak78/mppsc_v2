export class Marks {
    marks_type?: number;
    min_marks?: number;
    max_marks?: number;
    interview_id?: string;

    public constructor(init?: Partial<Marks>) {
        Object.assign(this, init);
    }

    static fromJson(data: Map<string, any>): Marks {
        const u: Marks = new Marks();
        u.marks_type = data['marks_type'];
        u.min_marks = data['min_marks'];
        u.max_marks = data['max_marks'];
        u.interview_id = data['interview_id'];
        return u;
    }

    toJSON(): Map<string, any> {
        const data: Map<string, any> = new Map<string, any>();
        data['marks_type'] = this.marks_type;
        data['min_marks'] = this.min_marks;
        data['max_marks'] = this.max_marks;
        data['interview_id'] = this.interview_id;
        return data;
    }
}

