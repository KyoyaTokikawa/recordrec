import { ComputedRef } from 'vue';
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
    public set SetUserMaster(value: UserClass[])
    {
        this.DispatchChange({name: UserMasterStore.ClassName, value: value} as ClassName)
    }

    get ValUserMaster(): ComputedRef
    {
        return this.GetComputed(UserMasterStore.ClassName);
    }

}