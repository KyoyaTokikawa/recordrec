import { AxiosClass } from "../base/AxiosClass";
import GetDayUserAttendanceRecordPrm from "../parameter/GetDayUserAttendanceRecordPrm"

export interface ValueType {
    ID : number;
    UserID : number
    Name : string
    CommutingDateTime : string
    LeavingDateTime : string
}

export default class APIGetToDayUserAttendanceRecord extends AxiosClass
{
    private static api= '/api/GetDayUserAttendanceRecord';

    constructor(prm : GetDayUserAttendanceRecordPrm)
    {
        super(APIGetToDayUserAttendanceRecord.api, prm.Json)
    }
}