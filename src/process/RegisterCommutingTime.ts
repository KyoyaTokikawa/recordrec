import {AttendanceTime} from '../class/AttendanceTimeClass';
import { AxiosClass } from '@/class/API/base/AxiosClass';
import RegisterCommutingTimePrm from '@/class/API/parameter/RegisterCommutingTimePrm';
import APIRegisterCommutingTime from '@/class/API/class/APIRegisterCommutingTime';
export default function RegisterCommutingTime(
    lstdata: AttendanceTime[],
    userID: number,
    nowtime: Date,
    NowDay: string
) : AttendanceTime[]
{
    // 登録API
    console.log(new Date(nowtime))
    const prm :RegisterCommutingTimePrm = new RegisterCommutingTimePrm(1, nowtime);
    const post: APIRegisterCommutingTime = new APIRegisterCommutingTime(prm);
    post.POST().then(res => {
        console.log(res)
        // const get = new AxiosClass('/api/GetToDayUserAttendanceRecord', {UserID: 1, nowDay: NowDay, nowtime: nowtime});
        // get.GET().then(res => {
        //     console.log(res)
        // });
    });
    // 
    
    return lstdata;
}