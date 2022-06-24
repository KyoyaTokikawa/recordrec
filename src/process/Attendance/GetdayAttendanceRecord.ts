import {AttendanceTime} from '../../class/AttendanceTimeClass';
import GetDayUserAttendanceRecordPrm from '@/class/API/parameter/Attendance/GetDayUserAttendanceRecordPrm';
import APIGetDayUserAttendanceRecord from '@/class/API/class/Attendance/APIGetDayUserAttendanceRecord';

export default async function GetTodayAttendanceRecord(    
    nowtime: string,
    UserID: string[] | null = null,
    str: string
) : Promise<AttendanceTime[]>
{
    const GetPrm = new GetDayUserAttendanceRecordPrm(UserID, nowtime, true, str)
    const Get = new APIGetDayUserAttendanceRecord(GetPrm);
    let lstdata: AttendanceTime[] = [];
    return await new Promise((resolve) => {
        Get.GET().then((response) => {
            const JSONString = JSON.stringify(response);
            const Json = JSON.parse(JSONString) as AttendanceTime[]
            lstdata = Json
            resolve(lstdata)
        })
        .catch(error => {
            console.log(error)
        })
    }) 
}