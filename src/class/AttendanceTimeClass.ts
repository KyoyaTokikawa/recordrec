export class AttendanceTime
{
    private m_UserId        : number;
    private m_Name          : string;
    private m_Commutingtime : string;
    private m_Leavingtime   : string;

    constructor (
        userid: number,
        name: string,
        commutingtime : string,
        leavingtime : string
    ) 
    {
        this.m_UserId = userid;
        this.m_Name = name;
        this.m_Commutingtime = commutingtime;
        this.m_Leavingtime = leavingtime;
    }

    public get ID(): number { return this.m_UserId; }
    public get Name(): string { return this.m_Name; }
    public get CommutingTime(): string { return this.m_Commutingtime; }
    public get LeavingTime(): string { return this.m_Leavingtime; }
}
