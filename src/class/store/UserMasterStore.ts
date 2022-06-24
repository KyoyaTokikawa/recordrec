import { ClassName } from '../../store/index'
import { UserClass } from '../UserClass';
import { StoreClass } from './StoreClass';

export class UserMasterStore extends StoreClass
{
    static ClassName = "UserMaseter";

    constructor()
    {
        super()
    }
    protected set SetUserMaster(value: UserClass[])
    {
        this.DispatchChange({name: UserMasterStore.ClassName, value: value} as ClassName)
    }

    protected get Vale(): UserClass[]
    {
        return this.Get(UserMasterStore.ClassName);
    }

}