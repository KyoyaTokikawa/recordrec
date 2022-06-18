import { AxiosClass } from '@/class/API/AxiosClass';

interface Json 
{
    sql:string
}

export default class SQLquerybase
{
    private json: Json;
    constructor(
        sql:string
    )
    {
       this.json = { sql:sql }
    }

    public POST():void
    {
        const post = new AxiosClass('/api/sql', this.json);
        post.POST();
    }
}