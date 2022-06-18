export default class UpdatingLeavingTime
{
    private m_Id: number;
    private m_LeavingTime: string;
    constructor(
        Id: number,
        LeavingTime: string
    )
    {
        this.m_Id = Id;
        this.m_LeavingTime = LeavingTime;
    }

    public get Id(): number{ return this.m_Id;}
    public get LeavingTime(): string{ return this.m_LeavingTime;}
}