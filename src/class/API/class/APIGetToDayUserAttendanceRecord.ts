import { AxiosClass } from "../base/AxiosClass";
import GetToDayUserAttendanceRecordPrm from "../parameter/GetToDayUserAttendanceRecordPrm"

export interface ValueType {
    ID : number;
    UserID : number
    Name : string
    CommutingDateTime : string
    LeavingDateTime : string
}

export default class APIGetToDayUserAttendanceRecord extends AxiosClass
{
    private static api= '/api/GetToDayUserAttendanceRecord';

    constructor(prm : GetToDayUserAttendanceRecordPrm)
    {
        super(APIGetToDayUserAttendanceRecord.api, prm.Json)
    }
}