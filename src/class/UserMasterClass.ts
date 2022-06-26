import { UserMasterStore } from "./store/UserMasterStore";
import { UserClass} from "./UserClass";
import { filter } from "./API/class/master/interface/IFAutoCompleteFilter";
import Enumerable from "linq";

export default class UserMasterClass extends UserMasterStore
{
    constructor()
    {
        super()
    }

    public set UserMaster(value: UserClass[])
    {
        this.SetUserMaster = value;
    }

    public get UserMaster(): UserClass[]
    {
        return this.Vale;
    }

    public get UserMasterFileter() : filter[]
    {
        return Enumerable.from(this.Vale)
                        .select(x => `{"name" : "${x.UserID} / ${x.Name}", "code" : "${x.UserID}"}`)
                        .select(x => JSON.parse(x))
                        .toArray()
    }
}