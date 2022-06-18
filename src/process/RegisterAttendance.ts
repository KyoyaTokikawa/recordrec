import {AttendanceTime} from '../class/AttendanceTimeClass';
import { AxiosClass } from '@/class/API/AxiosClass';

export default function RegisterCommutingTime(
    lstdata: AttendanceTime[],
    userID: number,
    name: string,
    nowtime: string
) : AttendanceTime[]
{

    const data: AttendanceTime | undefined = lstdata.find(x => x.CommutingTime !='' && x.LeavingTime == '');
    // if (typeof(data) == 'undefined')
    {
        const jsondata_ = { UserID: userID, Name: name, CommutingTime: nowtime };
        const post: AxiosClass = new AxiosClass('/api/sql/RegisterCommutingTime', jsondata_);
        post.POST();

        const newdata: AttendanceTime = new AttendanceTime(
            userID,
            name,
            nowtime,
            ''
            );
        lstdata.push(newdata);
        lstdata.reverse()
        return lstdata;
    }
    // else
    // {
    //     alert('退勤処理がされていません。');
    //     return lstdata;
    // }
}