import { AxiosClass } from "../../base/AxiosClass";
import GetDayUserAttendanceRecordPrm from "../../parameter/Attendance/GetDayUserAttendanceRecordPrm"

export default class APIGetToDayUserAttendanceRecord extends AxiosClass
{
    private static api= '/api/GetDayUserAttendanceRecord';

    constructor(prm : GetDayUserAttendanceRecordPrm)
    {
        super(APIGetToDayUserAttendanceRecord.api, prm.Json)
    }
}