import UpdatingLeavingTimePrm from '@/class/API/parameter/Attendance/UpdatingLeavingTimePrm';
import APIUpdatingLeavingTime from '@/class/API/class/Attendance/APIUpdatingLeavingTime';
export default async function RegisterLeavingTime(
    userID: string,
    nowtime: Date
): Promise<void>
{
    const PostPrm:UpdatingLeavingTimePrm = new UpdatingLeavingTimePrm(userID, nowtime);
    const post: APIUpdatingLeavingTime = new APIUpdatingLeavingTime(PostPrm);
    console.log('Update')
    return await new Promise((resolve, reject) => {
        post.POST().then(res => {
            resolve(res);
        });
    })
}