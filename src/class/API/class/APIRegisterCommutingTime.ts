import { AxiosClass } from "../base/AxiosClass";
import RegisterCommutingTimePrm from "../parameter/RegisterCommutingTimePrm"

export default class APIRegisterCommutingTime extends AxiosClass
{
    private static api= '/api/RegisterCommutingTime';

    constructor(prm : RegisterCommutingTimePrm)
    {
        super(APIRegisterCommutingTime.api, prm.Json)
    }
}