interface Json
{
    UserID: number[] | null
    ToDay: string
}
export default class GetToDayUserAttendanceRecordPrm
{
    private m_UserID: number[] | null;
    private m_ToDay: string;
    constructor(
        UserID: number[] | null,
        ToDay: string
    )
    {
        this.m_UserID = UserID;
        this.m_ToDay = ToDay;
    }

    public get UserID(): number[] | null{ return this.m_UserID;}
    public get ToDay(): string{ return this.m_ToDay;}

    public get Json(): Json{
        return { UserID: this.m_UserID, ToDay: this.m_ToDay}
    }
}