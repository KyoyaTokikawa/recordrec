import { ComputedRef } from 'vue';

import { StoreClass } from './StoreClass';

export class DateTimeStore extends StoreClass {
    public static date           = "date";
    public static DATETIME2      = "DATETIME2";
    public static NowDay         = "NowDay";
    public static yyyymmddhhmmss = "yyyymmddhhmmss";
    public static Year           = "YYYY";
    public static Month          = "MM";
    public static Day            = "DD";
    public static Hour           = "hh";
    public static Minutes        = "mm";
    public static Seconds        = "ss";
    public static hhmmss         = "hhmmss";
    public static hhmm           = "hhmm";
    
    constructor()
    {
        super();
    }

    
    get ValDate(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.date);
    }
    get ValDateTime2(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.DATETIME2);
    }
    get ValNowDay(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.NowDay);
    }
    get ValHHMMSS(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.hhmmss);
    }
    get ValHHMM(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.hhmm);
    }
    get ValYYYYMMDDHHMMSS(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.yyyymmddhhmmss);
    }
}


