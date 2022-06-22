import {AttendanceTime} from '../class/AttendanceTimeClass';
import RegisterCommutingTimePrm from '@/class/API/parameter/RegisterCommutingTimePrm';
import APIRegisterCommutingTime from '@/class/API/class/APIRegisterCommutingTime';
import GetToDayUserAttendanceRecordPrm from '@/class/API/parameter/GetToDayUserAttendanceRecordPrm';
import APIGetToDayUserAttendanceRecord from '@/class/API/class/APIGetToDayUserAttendanceRecord';

export default function RegisterCommutingTime(
    lstdata: AttendanceTime[],
    userID: number,
    nowtime: Date,
) : Promise<AttendanceTime[]>
{
    // 登録API
    console.log(new Date(nowtime))
    const PostPrm:RegisterCommutingTimePrm = new RegisterCommutingTimePrm(1, nowtime);
    const post: APIRegisterCommutingTime = new APIRegisterCommutingTime(PostPrm);
    return new Promise((resolve, reject) => {post.POST().then(res => {
            const GetPrm = new GetToDayUserAttendanceRecordPrm(1, nowtime)
            const Get = new APIGetToDayUserAttendanceRecord(GetPrm);
            Get.GET().then((response) => {
                const JSONString = JSON.stringify(response);
                const Json = JSON.parse(JSONString) as AttendanceTime[]
                
                Json.forEach(row => {
                    console.log(row)
                    const record :AttendanceTime = new AttendanceTime(
                        row.ID,
                        row.UserID,
                        row.Name,
                        row.CommutingTime,
                        row.LeavingTime
                    )
                    console.log(record)
                    lstdata.push(record)
                })
                resolve(lstdata);
            })
        });
    })
}