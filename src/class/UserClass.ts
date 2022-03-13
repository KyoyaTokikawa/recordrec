export class UserClass
{
    private ID: number;
    private Name: string;
    private CreateDateTime: Date;
    private UpdateDateTime: Date;


    constructor(resData: any)
    {
        this.ID = resData.ID;
        this.Name = resData.Name;
        this.CreateDateTime = resData.CreateDateTime;
        this.UpdateDateTime = resData.UpdateDateTime;
    }

}