import { computed, ComputedRef } from 'vue';
import { Store} from 'vuex'
import { State, ClassName, useStore } from '../store/index'

interface DateTimeName {
    HHMMSS: ComputedRef;
    HHMM: ComputedRef;
}

export class DateTimeClass {
    public static hhmmss = "hhmmss";
    public static hhmm = "hhmm";

    Store: Store<State>;
    IntervalHHMMssID: number = setInterval(() => {
        this.Store.dispatch('change', { name: DateTimeClass.hhmmss, value: this.GetHHMMss() } as ClassName);
        this.Store.dispatch('change', { name: DateTimeClass.hhmm, value: this.GetHHMM() } as ClassName);
    });
    NowDateTime: DateTimeName =
    {
        HHMMSS: this.GetComputed(DateTimeClass.hhmmss),
        HHMM: this.GetComputed(DateTimeClass.hhmm)
    };

    constructor()
    {
        this.Store = useStore();
    }

    GetComputed(label: string): ComputedRef
    {
        return (computed(() => this.Store.getters.getValue(label)));
    }

    GetHHMMss(): string{
        const date = new Date();

        let HH: string = date.getHours().toString();
        if (HH.length < 2)
        HH = this.GetTime(HH);

        let MM: string = date.getMinutes().toString();
        MM = this.GetTime(MM);

        let SS: string = date.getSeconds().toString();
        if (SS.length < 2)
        SS = this.GetTime(SS);
        return HH + ':' + MM + ':' + SS;
    }
    GetHHMM(): string{
        const date = new Date();

        let HH: string = date.getHours().toString();
        if (HH.length < 2)
        HH = this.GetTime(HH);

        let MM: string = date.getMinutes().toString();
        if (MM.length < 2)
        MM = this.GetTime(MM);

        return HH + ':' + MM;
    }
    GetTimeHHMMss(): ComputedRef{
        return this.NowDateTime.HHMMSS;
    }
    
    GetTimeHHMM(): ComputedRef {
        return this.NowDateTime.HHMM;
    }
    GetTime(time: string): string
    {
        let value = time
        if (time.length < 2)
        {
            value = '0' + time;
        }
        return value;
    }
}

