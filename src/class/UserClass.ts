export interface IFUserClass
{
    ID         : number,
    UserID     : string,
    Name       : string,
    FirstName  : string | null
    FamilyName : string | null
    MiddleName : string | null
    BirthDay   : string | null
    Deleted    : number | null
    CreateDate : string | null
    UpdateDate : string | null
}
export class UserClass implements IFUserClass
{
    private m_ID         : number
    private m_UserID     : string
    private m_Name       : string
    private m_FirstName  : string | null
    private m_FamilyName : string | null
    private m_MiddleName : string | null
    private m_BirthDay   : string | null
    private m_Deleted    : number | null
    private m_CreateDate : string | null
    private m_UpdateDate : string | null

    constructor(
        ID         : number,
        UserID     : string,
        Name       : string,
        FirstName  : string | null = null,
        FamilyName : string | null = null,
        MiddleName : string | null = null,
        BirthDay   : string | null = null,
        Deleted    : number | null = null,
        CreateDate : string | null = null,
        UpdateDate : string | null = null
        )
    {
        this.m_ID = ID;
        this.m_UserID = UserID;
        this.m_Name = Name;
        this.m_FirstName = FirstName;
        this.m_FamilyName = FamilyName;
        this.m_MiddleName = MiddleName;
        this.m_BirthDay = BirthDay;
        this.m_Deleted = Deleted;
        this.m_CreateDate = CreateDate;
        this.m_UpdateDate  = UpdateDate;
     }

     public get ID()         : number { return this.m_ID }
     public get UserID()     : string { return this.m_UserID }
     public get Name()       : string { return this.m_Name }
     public get FirstName()  : string | null { return this.m_FirstName }
     public get FamilyName() : string | null { return this.m_FamilyName }
     public get MiddleName() : string | null { return this.m_MiddleName }
     public get BirthDay()   : string | null { return this.m_BirthDay }
     public get Deleted()    : number | null { return this.m_Deleted }
     public get CreateDate() : string | null { return this.m_CreateDate }
     public get UpdateDate() : string | null { return this.m_UpdateDate }
     public get fileterValue() : string { return `{"name" : "${this.UserID}", "code" : "${this.UserID}"}`}
}