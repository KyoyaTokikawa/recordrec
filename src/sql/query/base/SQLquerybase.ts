import { AxiosClass } from '@/class/API/base/AxiosClass';

interface Json 
{
    sql:string
}

export interface SQLResult
{
    colName: string;
    value: string;
}

export default class SQLquerybase
{
    private json: Json;
    constructor(
        sql:string,
    )
    {
       this.json = { sql:sql }
    }

    public POST():void
    {
        const post = new AxiosClass('/api/sql', this.json);
        post.POST();
    }

    public async GET(): Promise<SQLResult[]>
    {
        const GET = new AxiosClass('/api/sql', this.json);
        return await GET.GET();
    }
}