export class UserClass
{
    private ID: number
    private Name: string;

    constructor(id: number, name: string)
    {
        this.Name = name;
        this.ID = id;
    }

    get id(): number
    {
        return this.ID;
    }

    get name(): string
    {
        return this.Name;
    }
}