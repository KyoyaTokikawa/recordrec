import axios from 'axios';
axios.defaults.withCredentials = true;

export class AxiosClass
{
    Json: any;
    API:string;
    constructor(api:string, Json: any)
    {
        this.Json = Json;
        this.API = api;
    }

    axicsPOST(): void
    {
        axios.post(process.env.VUE_APP_API_URL + this.API, this.Json);
    }
}