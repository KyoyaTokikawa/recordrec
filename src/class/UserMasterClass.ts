import { UserMasterStore } from "./store/UserMasterStore";
import { UserClass } from "./UserClass";
export class UserMasterClass extends UserMasterStore
{
    constructor()
    {
        super()
    }

    public set UserMaster(value: UserClass[])
    {
        this.SetUserMaster = value;
    }

    public get Usermaster(): UserClass[]
    {
        return this.Vale;
    }
}