import { AxiosClass } from "../base/AxiosClass";
import RegisterCommutingTimePrm from "../parameter/RegisterCommutingTimePrm"
interface ValueType {
    ID : number;
    UserID : number
    Name : string
    CommutingDateTime : string
    LeavingDateTime : string
}

export interface ReturnData {
    [Keys : string] : ValueType
}

export default class APIRegisterCommutingTime extends AxiosClass
{
    private static api= '/api/RegisterCommutingTime';

    constructor(prm : RegisterCommutingTimePrm)
    {
        super(APIRegisterCommutingTime.api, prm.Json)
    }
}