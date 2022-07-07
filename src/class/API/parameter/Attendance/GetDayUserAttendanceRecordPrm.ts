export interface IFGetDayUserAttendanceRecordPrm
{
    UserID: string[] | null
    ToDay: string | null
    reload : boolean
    proc: string
}
export default class GetDayUserAttendanceRecordPrm
{
    private m_UserID: string[] | null;
    private m_ToDay: string | null;
    private m_reload : boolean
    private m_proc: string;
    constructor(
        UserID : string[] | null,
        ToDay  : string | null,
        reload : boolean,
        proc   : string
    )
    {
        this.m_UserID = UserID;
        this.m_ToDay  = ToDay;
        this.m_reload = reload
        this.m_proc   = proc;
    }

    public get UserID(): string[] | null{ return this.m_UserID;}
    public get ToDay(): string | null{ return this.m_ToDay;}
    public get reload() : boolean {return this.m_reload}
    public get proc(): string {return this.m_proc}
    public get Json(): IFGetDayUserAttendanceRecordPrm{
        return {
            UserID : this.m_UserID,
            ToDay: this.m_ToDay,
            reload : this.m_reload,
            proc: this.m_proc
        }
    }
}