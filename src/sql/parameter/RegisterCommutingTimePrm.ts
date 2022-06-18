export default class RegisterCommutingTimePrm
{
    private m_Id: number;
    private m_UserID: number;
    private m_Name: string;
    private m_CommutingTime: string;
    constructor(
        Id: number,
        UserID: number,
        Name: string,
        CommutingTime: string
    )
    {
        this.m_Id = Id;
        this.m_UserID = UserID;
        this.m_Name = Name;
        this.m_CommutingTime = CommutingTime;
    }

    public get Id(): number{ return this.m_Id;}
    public get UserID(): number{ return this.m_UserID;}
    public get Name(): string{ return this.m_Name;}
    public get CommutingTime(): string{ return this.m_CommutingTime;}
}