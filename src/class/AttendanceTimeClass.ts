interface json {
    ID: number,
    UserID: number,
    Name: string,
    CommutingTime: string,
    LeavingTime: string
}

export class AttendanceTime
{
    private m_ID            : number;
    private m_UserId        : number;
    private m_Name          : string;
    private m_Commutingtime : string;
    private m_Leavingtime   : string;

    constructor (
        id: number,
        userid: number,
        name: string,
        commutingtime : string,
        leavingtime : string
    ) 
    {
        this.m_ID = id;
        this.m_UserId = userid;
        this.m_Name = name;
        this.m_Commutingtime = commutingtime;
        this.m_Leavingtime = leavingtime;
    }

    public set SetLeavingTime(value: string) { this.m_Leavingtime = value;}

    public get ID():number { return this.m_ID;}
    public get UserId(): number { return this.m_UserId; }
    public get Name(): string { return this.m_Name; }
    public get CommutingTime(): string { return this.m_Commutingtime; }
    public get LeavingTime(): string { return this.m_Leavingtime; }

    public get Jsondata(): json {
        return { ID: this.ID, UserID: this.UserId, Name: this.Name, CommutingTime: this.CommutingTime, LeavingTime: this.LeavingTime }
    }
}
