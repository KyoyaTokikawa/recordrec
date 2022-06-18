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

    POST(): void
    {
        axios.post(process.env.VUE_APP_API_URL + this.API, this.Json).then(response => {
            console.log('body:', response.data);  // Yohei Munesada
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
        return new Promise((resolve, reject) => {
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
                    resolve(result);
                })
                .catch(function (error: any) {
                    // エラー時に実行
                    reject(error);
                })
                .then(function () {
                    // 常に実行
                });
        });
    }
}