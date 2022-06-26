import { AxiosClass } from "../../base/AxiosClass";
import RegisterCommutingTimePrm, { CommutingTimePrm } from "../../parameter/Attendance/RegisterCommutingTimePrm"

export default class APIRegisterCommutingTime extends AxiosClass<CommutingTimePrm>
{
    private static api= '/api/RegisterCommutingTime';

    constructor(prm : RegisterCommutingTimePrm)
    {
        super(APIRegisterCommutingTime.api, prm.Json)
    }
}