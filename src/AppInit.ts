// マスタの取得とかする処理
import { AxiosClass } from '@/class/API/AxiosClass'
import { UserMasterStore } from './class/store/UserMasterStore';

export function Init(): void
{
    const UserMaster: UserMasterStore = new UserMasterStore();
    const UserMasterAxios: AxiosClass = new AxiosClass("/api/sql/GetUserMaster", null);    
    UserMasterAxios.GET().then((res:any) =>{
        console.log(res.data)
        UserMaster.SetUserMaster = res.data;
    });
}
