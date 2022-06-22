interface Json
{
    UserID: number
    ToDay: Date
}
export default class GetToDayUserAttendanceRecordPrm
{
    private m_UserID: number;
    private m_ToDay: Date;
    constructor(
        UserID: number,
        ToDay: Date
    )
    {
        this.m_UserID = UserID;
        this.m_ToDay = ToDay;
    }

    public get UserID(): number{ return this.m_UserID;}
    public get ToDay(): Date{ return this.m_ToDay;}

    public get Json(): Json{
        return { UserID: this.m_UserID, ToDay: this.m_ToDay}
    }
}