import RegisterCommutingTimePrm from '@/class/API/parameter/RegisterCommutingTimePrm';
import APIRegisterCommutingTime from '@/class/API/class/APIRegisterCommutingTime';

export default async function RegisterCommutingTime(
    userID: number,
    nowtime: Date
) : Promise<void>
{
    // 登録API
    const PostPrm:RegisterCommutingTimePrm = new RegisterCommutingTimePrm(userID, nowtime);
    const post: APIRegisterCommutingTime = new APIRegisterCommutingTime(PostPrm);
    return await new Promise((resolve, reject) => {
        post.POST().then(res => {
            resolve(res);
        });
    })
}