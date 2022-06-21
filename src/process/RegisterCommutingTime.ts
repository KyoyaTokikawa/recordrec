import {AttendanceTime} from '../class/AttendanceTimeClass';
import { AxiosClass } from '@/class/API/AxiosClass';
export default function RegisterCommutingTime(
    lstdata: AttendanceTime[],
    userID: number,
    nowtime: string,
    NowDay: string
) : AttendanceTime[]
{
    // 登録API
    const post = new AxiosClass('/api/RegisterCommutingTime', {UserID: 1, nowDay: NowDay, nowtime: nowtime});
    post.POST().then(() => {
        const get = new AxiosClass('/api/GetToDayUserAttendanceRecord', {UserID: 1, nowDay: NowDay, nowtime: nowtime});
        get.GET().then(res => {
            console.log(res)
        });
    });
    // 
    
    return lstdata;
}