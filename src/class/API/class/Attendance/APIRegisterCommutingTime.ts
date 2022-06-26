import { AxiosClass } from "../../base/AxiosClass";
import RegisterCommutingTimePrm, { IFRegisterCommutingTimePrm } from "../../parameter/Attendance/RegisterCommutingTimePrm"

export default class APIRegisterCommutingTime extends AxiosClass<IFRegisterCommutingTimePrm>
{
    private static api= '/api/RegisterCommutingTime';

    constructor(prm : RegisterCommutingTimePrm)
    {
        super(APIRegisterCommutingTime.api, prm.Json)
    }
}