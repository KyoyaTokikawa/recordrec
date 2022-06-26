import axios from 'axios';
axios.defaults.withCredentials = true;

export class AxiosClass<T>
{
    Json: T;
    API:string;
    constructor(api:string, Json: T)
    {
        this.API = api;
        this.Json = Json;
    }

    async POST(): Promise<void>
    {
        console.log(this.Json)
        return await new Promise((resolve, reject) => {
            axios.post(process.env.VUE_APP_API_URL + this.API, this.Json)
            .then(response => {
                console.log(response.data)
                resolve(response.data);
            })
            .catch((error) => {
                alert(error.response.data)
                reject(error)
            });
        });
    }
    
    async GET<T>(): Promise<T>
    {
        return await new Promise((resolve, reject) => {
            axios.get(
                process.env.VUE_APP_API_URL + this.API,
                {
                    params: this.Json
                }
                )
                .then((response) => {
                    // 成功時に実行
                    // response.dataに実際のデータが入っている
                    const JSONString = JSON.stringify(response.data);
                    const Json = JSON.parse(JSONString) as T
                    resolve(Json);
                }).catch(error => {
                    reject(error)
                });
        });
    }
}