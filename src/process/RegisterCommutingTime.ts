import {AttendanceTime} from '../class/AttendanceTimeClass';
import { UserMasterClass } from '@/class/UserMasterClass'
import { UserClass } from '@/class/UserClass';
import SQLCommutingTime from '@/sql/query/SQLRegisterCommutingTime';
import RegisterCommutingTimePrm from '@/sql/parameter/RegisterCommutingTimePrm';
import Enumerable from "linq";

export default function RegisterCommutingTime(
    lstdata: AttendanceTime[],
    userID: number,
    nowtime: string,
    UserMaster: UserMasterClass
) : AttendanceTime[]
{
    const User: UserClass | undefined = Enumerable.from(UserMaster.Usermaster).where(x => x.ID == userID).firstOrDefault();
    console.log(User)
    if (typeof(User) === 'undefined')
    {
        console.log(User)
        alert(`${userID}はマスタに登録されていません。`)
        return lstdata;
    }
    else
    {
        const data: AttendanceTime | undefined = lstdata.find(x => x.CommutingTime !='' && x.LeavingTime == '');
        const AllID: number[] = Enumerable.from(lstdata).select(x => x.ID).toArray();
        let ID = 1;
        if (AllID.length > 0)
        {
            ID = Enumerable.from(AllID).max() + 1;
        }
        
        if (typeof(data) == 'undefined')
        {
            const newdata: AttendanceTime = new AttendanceTime(
                ID,
                userID,
                User.Name,
                nowtime,
                ''
                );
            const prm = new RegisterCommutingTimePrm(
                ID,
                userID,
                User.Name,
                nowtime                
            );
            const sql:SQLCommutingTime = new SQLCommutingTime(prm);
            sql.POST();
            lstdata.push(newdata);
            lstdata.reverse()
            return lstdata;
        }
        else
        {
            alert('退勤処理がされていません。');
            return lstdata;
        }
    }

}