import { AxiosClass } from "../../base/AxiosClass";
import GetUserMasterPrm from "../../parameter/master/GetUserMasterPrm";
export default class GetUserMaster extends AxiosClass
{
    private static api = '/api/GetUserMaster';

    constructor(prm : GetUserMasterPrm)
    {
        super(GetUserMaster.api, prm.Json)
    }
}