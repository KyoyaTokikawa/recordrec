import { AxiosClass } from "../../base/AxiosClass";
import UpdatingLeavingTimePrm, {IFUpdatingLeavingTimePrm} from "../../parameter/Attendance/UpdatingLeavingTimePrm"

export default class APIUpdatingLeavingTime extends AxiosClass<IFUpdatingLeavingTimePrm>
{
    private static api= '/api/UpdatingLeavingTime';

    constructor(prm : UpdatingLeavingTimePrm)
    {
        super(APIUpdatingLeavingTime.api, prm.Json)
    }
}