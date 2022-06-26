import { AxiosClass } from "../../base/AxiosClass";
import GetUserMasterPrm, {IFGetUserMasterPrm} from "../../parameter/master/GetUserMasterPrm";
export default class GetUserMaster extends AxiosClass<IFGetUserMasterPrm>
{
    private static api = '/api/GetUserMaster';

    constructor(prm : GetUserMasterPrm)
    {
        super(GetUserMaster.api, prm.Json)
    }
}