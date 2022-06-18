// マスタの取得とかする処理
import { AxiosClass } from '@/class/API/AxiosClass'
import { UserClass } from './class/UserClass';
import { UserMasterClass } from './class/UserMasterClass';
export function Init(): void
{
    const UserMasterAxios: AxiosClass = new AxiosClass("/api/sql/GetUserMaster", null);    
    const UserMaster = new UserMasterClass();
    UserMasterAxios.GET().then((res:any) =>{
        const usermaster: UserClass[] = [];
        res.data.forEach((element: any) => {
            const user = new UserClass(element);
            usermaster.push(user);
        });
        UserMaster.UserMaster = usermaster;
    });
}
