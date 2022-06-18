import UpdatingLeavingTime from '../parameter/UpdatingLeavingTimePrm';
import SQLquerybase from '../query/base/SQLquerybase'

export default class SQLUpdatingLeavingTime extends SQLquerybase
{
    constructor(prm : UpdatingLeavingTime)
    {
       const sql = 
       `UPDATE
            AttendanceTable
        SET
            LeavingDateTime = CONVERT(DATETIME2, '${prm.LeavingTime}')
        WHERE
            ID = ${prm.Id};`;
        super(sql);
    }
}