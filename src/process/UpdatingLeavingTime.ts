import {AttendanceTime} from '../class/AttendanceTimeClass';
import UpdatingLeavingTimePrm from '@/sql/parameter/UpdatingLeavingTimePrm';
import SQLUpdatingLeavingTime from '@/sql/query/SQLUpdatingLeavingTime';
import Enumerable from "linq";

export default function RegisterLeavingTime(
    lstdata: AttendanceTime[],
    userID: number,
    nowtime: string
): AttendanceTime[]
{
    const datlst = Enumerable.from(lstdata).where(x => x.UserID === userID && x.LeavingTime === '').toArray();
    if (datlst.length > 1)
    {
        alert('データが異常です。管理者に連絡してください。')
        return lstdata;
    }
    else if (datlst.length == 1)
    {
        const data = Enumerable.from(datlst).firstOrDefault();
        if (typeof(data) != 'undefined')
        {
            data.SetLeavingTime = nowtime;
            const prm = new UpdatingLeavingTimePrm(
                data.ID,
                nowtime                
            );
            const sql:SQLUpdatingLeavingTime = new SQLUpdatingLeavingTime(
                prm
            );
            sql.POST();
        }

        return lstdata;
    }
    else
    {
        alert('出勤処理がされていません。')
        return lstdata;
    }
}