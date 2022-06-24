import { UserMasterStore } from "./store/UserMasterStore";
import { UserClass, IFUserClass } from "./UserClass";
import Enumerable from "linq";
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

    public get UserMaster(): UserClass[]
    {
        return this.Vale;
    }

    public get UserMasterFileter() : never
    {
        return Enumerable.from(this.Vale)
                        .select(x => `{"name" : "${x.UserID}", "code" : "${x.UserID}"}`)
                        .select(x => JSON.parse(x))
                        .toArray() as never
    }
}