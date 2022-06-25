import APIGetUserMaster from "@/class/API/class/master/APIGetUserMaster";
import GetUserMasterPrm from "@/class/API/parameter/master/GetUserMasterPrm";
import { UserClass } from "@/class/UserClass";
import UserMasterClass from "@/class/UserMasterClass";

export default async function GetUserMaster(    
    UserID: string[] | null = [],
) : Promise<UserClass[]>
{
    const GetPrm = new GetUserMasterPrm(UserID)
    const Get = new APIGetUserMaster(GetPrm);
    const UserMaster: UserMasterClass = new UserMasterClass();
    return await new Promise((resolve) => {
        Get.GET().then((response) => {
            const JSONString = JSON.stringify(response);
            const Json = JSON.parse(JSONString) as UserClass[]
            UserMaster.UserMaster = Json
            resolve(UserMaster.UserMaster)
        })
        .catch(error => {
            console.log(error)
        })
    }) 
}