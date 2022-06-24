import APIGetUserMaster from "@/class/API/class/master/APIGetUserMaster";
import GetUserMasterPrm from "@/class/API/parameter/master/GetUserMasterPrm";
import { IFUserClass } from "@/class/UserClass";
import { UserMasterClass } from "@/class/UserMasterClass";

export default async function GetUserMaster(    
    UserID: string[] | null = [],
) : Promise<IFUserClass[]>
{
    const GetPrm = new GetUserMasterPrm(UserID)
    const Get = new APIGetUserMaster(GetPrm);
    const UserMaster: UserMasterClass = new UserMasterClass();
    return await new Promise((resolve) => {
        Get.GET().then((response) => {
            const JSONString = JSON.stringify(response);
            console.log(response)
            const Json = JSON.parse(JSONString) as IFUserClass[]
            UserMaster.UserMaster = Json
            console.log(Json)
            resolve(UserMaster.UserMaster)
        })
        .catch(error => {
            console.log(error)
        })
    }) 
}