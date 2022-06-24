import { UserMasterStore } from "./store/UserMasterStore";
import { UserClass, IFUserClass } from "./UserClass";
export class UserMasterClass extends UserMasterStore
{
    constructor()
    {
        super()
    }

    public set UserMaster(value: IFUserClass[])
    {
        this.SetUserMaster = value;
    }

    public get UserMaster(): IFUserClass[]
    {
        return this.Vale;
    }
}