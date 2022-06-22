interface Json
{
    UserID: number[] | null
    ToDay: string
    proc: string
}
export default class GetToDayUserAttendanceRecordPrm
{
    private m_UserID: number[] | null;
    private m_ToDay: string;
    private m_proc: string;
    constructor(
        UserID: number[] | null,
        ToDay: string,
        proc: string
    )
    {
        this.m_UserID = UserID;
        this.m_ToDay = ToDay;
        this.m_proc = proc;
    }

    public get UserID(): number[] | null{ return this.m_UserID;}
    public get ToDay(): string{ return this.m_ToDay;}

    public get Json(): Json{
        return { UserID: this.m_UserID, ToDay: this.m_ToDay, proc: this.m_proc}
    }
}