interface Json
{
    UserID: string
    RegisterCommutingTime: Date
}
export default class RegisterCommutingTimePrm
{
    private m_UserID: string;
    private m_RegisterCommutingTime: Date;
    constructor(
        UserID: string,
        CommutingTime: Date
    )
    {
        this.m_UserID = UserID;
        this.m_RegisterCommutingTime = CommutingTime;
    }

    public get UserID(): string{ return this.m_UserID;}
    public get CommutingTime(): Date{ return this.m_RegisterCommutingTime;}

    public get Json(): Json{
        return { UserID: this.m_UserID, RegisterCommutingTime: this.m_RegisterCommutingTime}
    }
}