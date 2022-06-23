interface Json{
    UserID              : string,
    RegisterLeavingTime : Date
}
export default class UpdatingLeavingTimePrm
{
    private m_UserID      : string;
    private m_LeavingTime : Date;
    constructor(
        UserID      : string,
        LeavingTime : Date
    )
    {
        this.m_UserID      = UserID;
        this.m_LeavingTime = LeavingTime;
    }

    public get Id()          : string { return this.m_UserID;}
    public get LeavingTime() : Date   { return this.m_LeavingTime;}
    public get Json()        : Json   {
        return { UserID: this.m_UserID, RegisterLeavingTime: this.m_LeavingTime}
    }
}