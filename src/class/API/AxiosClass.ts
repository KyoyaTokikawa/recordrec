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

    GET(): any
    {
        return axios.get(process.env.VUE_APP_API_URL + this.API, this.Json);
    }
    
}