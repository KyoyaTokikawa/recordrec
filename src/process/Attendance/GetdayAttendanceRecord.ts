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
    console.log('exec')
    console.log(nowtime)
    return await new Promise((resolve) => {
        Get.GET<AttendanceTime[]>().then((response: AttendanceTime[]) => {
            resolve(response)
        })
    }) 
}