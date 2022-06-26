import { AxiosClass } from "../../base/AxiosClass";
import GetDayUserAttendanceRecordPrm, {IFGetDayUserAttendanceRecordPrm} from "../../parameter/Attendance/GetDayUserAttendanceRecordPrm"

export default class APIGetToDayUserAttendanceRecord extends AxiosClass<IFGetDayUserAttendanceRecordPrm>
{
    private static api= '/api/GetDayUserAttendanceRecord';

    constructor(prm : GetDayUserAttendanceRecordPrm)
    {
        super(APIGetToDayUserAttendanceRecord.api, prm.Json)
    }
}