interface Json{
    UserID: number,
    RegisterLeavingTime: Date
}
export default class UpdatingLeavingTimePrm
{
    private m_UserID: number;
    private m_LeavingTime: Date;
    constructor(
        UserID: number,
        LeavingTime: Date
    )
    {
        this.m_UserID = UserID;
        this.m_LeavingTime = LeavingTime;
    }

    public get Id(): number{ return this.m_UserID;}
    public get LeavingTime(): Date{ return this.m_LeavingTime;}
    public get Json(): Json{
        return { UserID: this.m_UserID, RegisterLeavingTime: this.m_LeavingTime}
    }
}