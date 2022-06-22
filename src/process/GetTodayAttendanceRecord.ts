import {AttendanceTime} from '../class/AttendanceTimeClass';
import GetToDayUserAttendanceRecordPrm from '@/class/API/parameter/GetToDayUserAttendanceRecordPrm';
import APIGetToDayUserAttendanceRecord from '@/class/API/class/APIGetToDayUserAttendanceRecord';

export default async function GetTodayAttendanceRecord(    
    nowtime: string,
    UserID: number[] | null = null,
    str: string
) : Promise<AttendanceTime[]>
{
    const GetPrm = new GetToDayUserAttendanceRecordPrm(UserID, nowtime, str)
    const Get = new APIGetToDayUserAttendanceRecord(GetPrm);
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