export interface IFGetUserMasterPrm{
    UserID : string[] | null
}
export default class GetUserMasterPrm
{
    private m_UserID : string[] | null;
    constructor(
        UserID : string[] | null,
    )
    {
        this.m_UserID      = UserID;
    }

    public get UserID() : string[] | null { return this.m_UserID;}
    public get Json()   : IFGetUserMasterPrm   {
        return { UserID: this.m_UserID}
    }
}