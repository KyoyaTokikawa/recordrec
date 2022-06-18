export class UserClass
{
    private m_ID: number;
    private m_Name: string;
    private m_CreateDateTime: Date;
    private m_UpdateDateTime: Date;

    constructor(resData: any)
    {
        this.m_ID = resData.ID;
        this.m_Name = resData.Name;
        this.m_CreateDateTime = resData.CreateDateTime;
        this.m_UpdateDateTime = resData.UpdateDateTime;
    }

    public get ID(): number { return this.m_ID;}
    public get Name(): string { return this.m_Name;}
}