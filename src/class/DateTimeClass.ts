import { computed, ComputedRef } from 'vue';
import { Store} from 'vuex'
import { State, ClassName, useStore } from '../store/index'

interface DateTimeName {
    DATE: ComputedRef;
    DATETIME2: ComputedRef;
    YYYYMMDDHHMMSS: ComputedRef; 
    HHMMSS: ComputedRef;
    HHMM: ComputedRef;
}

export class DateTimeClass {
    Store: Store<State>;
    
    public static date = "date";
    public static DATETIME2 = "DATETIME2";
    public static yyyymmddhhmmss = "yyyymmddhhmmss";
    public static Year = "YYYY";
    public static Month = "MM";
    public static Day = "DD";
    public static Hour = "hh";
    public static Minutes = "mm";
    public static Seconds = "ss";
    public static hhmmss = "hhmmss";
    public static hhmm = "hhmm";

    IntervalHHMMssID: number = setInterval(() => {
        this.Store.dispatch('change', { name: DateTimeClass.date, value: this.GetValue(DateTimeClass.date) } as ClassName);
        this.Store.dispatch('change', { name: DateTimeClass.DATETIME2, value: this.GetDATETIM2() } as ClassName);
        this.Store.dispatch('change', { name: DateTimeClass.yyyymmddhhmmss, value: this.GetHHMMss() } as ClassName);
        this.Store.dispatch('change', { name: DateTimeClass.hhmmss, value: this.GetHHMMss() } as ClassName);
        this.Store.dispatch('change', { name: DateTimeClass.hhmm, value: this.GetHHMM() } as ClassName);
    });
    NowDateTime: DateTimeName =
    {
        DATE: this.GetComputed(DateTimeClass.date),
        DATETIME2: this.GetComputed(DateTimeClass.DATETIME2),
        YYYYMMDDHHMMSS: this.GetComputed(DateTimeClass.yyyymmddhhmmss),
        HHMMSS: this.GetComputed(DateTimeClass.hhmmss),
        HHMM: this.GetComputed(DateTimeClass.hhmm)
    };

    constructor()
    {
        this.Store = useStore();
    }

    private GetComputed(label: string): ComputedRef
    {
        return (computed(() => this.Store.getters.getValue(label)));
    }

    private GetValue(value: string): string{
        const nowdate: Date = new Date();
        const val:string = nowdate.toString();
        switch (value)
        {
            case DateTimeClass.date:
                return val;
            case DateTimeClass.Year:
                return nowdate.getFullYear().toString();
            case DateTimeClass.Month:                
                return GetFillZero((nowdate.getMonth() + 1).toString());
            case DateTimeClass.Day:
                return GetFillZero(nowdate.getDate().toString());
            case DateTimeClass.Hour:
                return GetFillZero(nowdate.getHours().toString());
            case DateTimeClass.Minutes:
                return GetFillZero(nowdate.getMinutes().toString());
            case DateTimeClass.Seconds:
                return GetFillZero(nowdate.getSeconds().toString());                                
            default:
                return val;
        }
    }
    private GetHHMMss(): string{
        const HH: string = this.GetValue(DateTimeClass.Hour);
        const MM: string = this.GetValue(DateTimeClass.Minutes);
        const SS: string = this.GetValue(DateTimeClass.Seconds);
        return HH + ':' + MM + ':' + SS;
    }
    private GetHHMM(): string{
        const HH: string = this.GetValue(DateTimeClass.Hour);
        const MM: string = this.GetValue(DateTimeClass.Minutes);
        return HH + ':' + MM;
    }

    private GetDATETIM2(): string
    {
        const Year: string = this.GetValue(DateTimeClass.Year);
        const Month: string = this.GetValue(DateTimeClass.Month);
        const Day: string = this.GetValue(DateTimeClass.Day);
        const HH: string = this.GetValue(DateTimeClass.Hour);
        const MM: string = this.GetValue(DateTimeClass.Minutes);
        const SS: string = this.GetValue(DateTimeClass.Seconds);
        return Year + '-' + Month + '-' + Day + ' ' + HH + ':' + MM + ':' + SS;
    }

    GetDate(): ComputedRef
    {        
        return this.NowDateTime.DATE;
    }

    GetValDATETIME2(): ComputedRef
    {
        return this.NowDateTime.DATETIME2;
    }

    GetTimeHHMMss(): ComputedRef{
        return this.NowDateTime.HHMMSS;
    }
    
    GetTimeHHMM(): ComputedRef {
        return this.NowDateTime.HHMM;
    }
}

function GetFillZero(time: string): string
{
    let value = time;
    if (time.length < 2)
    {
        value = '0' + time;
    }
    return value;
}

