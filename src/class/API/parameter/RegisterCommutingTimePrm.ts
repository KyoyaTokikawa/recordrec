interface Json
{
    UserID: number
    RegisterCommutingTime: Date
}
export default class RegisterCommutingTimePrm
{
    private m_UserID: number;
    private m_RegisterCommutingTime: Date;
    constructor(
        UserID: number,
        CommutingTime: Date
    )
    {
        this.m_UserID = UserID;
        this.m_RegisterCommutingTime = CommutingTime;
    }

    public get UserID(): number{ return this.m_UserID;}
    public get CommutingTime(): Date{ return this.m_RegisterCommutingTime;}

    public get Json(): Json{
        return { UserID: this.m_UserID, RegisterCommutingTime: this.m_RegisterCommutingTime}
    }
}