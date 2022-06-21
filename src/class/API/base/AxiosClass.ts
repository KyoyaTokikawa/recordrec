import axios from 'axios';
axios.defaults.withCredentials = true;

export class AxiosClass
{
    Json: any;
    API:string;
    constructor(api:string, Json: any)
    {
        this.API = api;
        this.Json = Json;
    }

    async POST(): Promise<void>
    {
        console.log(this.Json)
        await new Promise((resolve, reject) => {
            axios.post(process.env.VUE_APP_API_URL + this.API, this.Json)
            .then(response => {
                console.log(response.status)
                resolve(response.data);
            })
            .catch((error) => {
                alert(error.response.data)
                reject(error)
            });
        });
    }

    GET_(): any
    {
        return axios.get(
            process.env.VUE_APP_API_URL + this.API,
            {
                params: this.Json
            }
            );
    }
    
    async GET(): Promise<any>
    {
        return await new Promise((resolve, reject) => {
            axios.get(
                process.env.VUE_APP_API_URL + this.API,
                {
                    params: this.Json
                }
                )
                .then(function (response: any) {
                    // 成功時に実行
                    // response.dataに実際のデータが入っている
                    const result = response.data;
                    console.log(response)
                    resolve(result);
                })
                .catch(function (error: any) {
                    // エラー時に実行
                    console.log(error)
                    reject(error);
                })
                .then(function (res) {
                    // 常に実行
                    console.log(res)
                });
        });
    }
}