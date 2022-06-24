import { AxiosClass } from "../../base/AxiosClass";
import UpdatingLeavingTimePrm from "../../parameter/Attendance/UpdatingLeavingTimePrm"

export default class APIUpdatingLeavingTime extends AxiosClass
{
    private static api= '/api/UpdatingLeavingTime';

    constructor(prm : UpdatingLeavingTimePrm)
    {
        super(APIUpdatingLeavingTime.api, prm.Json)
    }
}