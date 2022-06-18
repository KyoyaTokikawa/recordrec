import RegisterCommutingTimePrm from '../parameter/RegisterCommutingTimePrm';
import SQLquerybase from '../query/base/SQLquerybase'

export default class SQLCommutingTime extends SQLquerybase
{
    constructor(prm : RegisterCommutingTimePrm)
    {
       const sql = 
       `INSERT INTO
            AttendanceTable
        VALUES (
              (SELECT COUNT(*) + 1 FROM AttendanceTable)
            , ${prm.UserID}-- UserID
            , '${prm.Name}' -- Name
            ,CONVERT(DATETIME2, '${prm.CommutingTime}') -- CommutingTime
            ,NULL
            ,GETDATE()
            ,GETDATE()
        );`;
        super(sql);
    }
}