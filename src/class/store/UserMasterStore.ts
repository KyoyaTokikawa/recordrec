import { ClassName } from '../../store/index'
import { IFUserClass } from '../UserClass';
import { StoreClass } from './StoreClass';

export class UserMasterStore extends StoreClass
{
    static ClassName = "UserMaseter";

    constructor()
    {
        super()
    }
    protected set SetUserMaster(value: IFUserClass[])
    {
        this.DispatchChange({name: UserMasterStore.ClassName, value: value} as ClassName)
    }

    protected get Vale(): IFUserClass[]
    {
        return this.Get(UserMasterStore.ClassName);
    }

}