import {AttendanceTime} from '../class/AttendanceTimeClass';
import GetToDayUserAttendanceRecordPrm from '@/class/API/parameter/GetToDayUserAttendanceRecordPrm';
import APIGetToDayUserAttendanceRecord from '@/class/API/class/APIGetToDayUserAttendanceRecord';

export default function GetTodayAttendanceRecord(    
    nowtime: string,
    UserID: number[] | null = null
) : Promise<AttendanceTime[]>
{
    // 登録API

    const GetPrm = new GetToDayUserAttendanceRecordPrm(UserID, nowtime)
    const Get = new APIGetToDayUserAttendanceRecord(GetPrm);
    const lstdata: AttendanceTime[] = [];
    return new Promise((resolve) => {
        Get.GET().then((response) => {
            const JSONString = JSON.stringify(response);
            const Json = JSON.parse(JSONString) as AttendanceTime[]
            console.log(Json)
            Json.forEach(row => {
                const record :AttendanceTime = new AttendanceTime(
                    row.ID,
                    row.UserID,
                    row.Name,
                    row.CommutingTime,
                    row.LeavingTime
                )                
                lstdata.push(record)
            })
            resolve(lstdata)
        })
        .catch(error => {
            console.log(error)
        })
    }) 
}