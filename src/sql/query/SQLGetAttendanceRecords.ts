import SQLquerybase from './base/SQLquerybase'

export default class SQLGetAttendanceRecords extends SQLquerybase
{
    constructor()
    {
       const sql = 
       'SELECT TOP(10) FROM AttendanceTable ORDER BY ID DESC';
        super(sql);
    }
}