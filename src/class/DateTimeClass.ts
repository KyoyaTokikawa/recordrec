import { computed, ComputedRef } from 'vue';
import { Store} from 'vuex'
import { State, ClassName, useStore } from '../store/index'

interface DateTimeName {
    HHMMSS: ComputedRef;
    HHMM: ComputedRef;
}

export class DateTimeClass {
    Store: Store<State> = useStore();
    private static hhmmss = "hhmmss";
    private static hhmm = "hhmm";
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
        {
            HH = '0' + HH
        }

        let MM: string = date.getMinutes().toString();
        if (MM.length < 2)
        {
            MM = '0' + MM
        }

        let SS: string = date.getSeconds().toString();
        if (SS.length < 2)
        {
            SS = '0' + SS
        }
        return HH + ':' + MM + ':' + SS;
    }
    GetHHMM(): string{
        const date = new Date();

        let HH: string = date.getHours().toString();
        if (HH.length < 2)
        {
            HH = '0' + HH
        }

        let MM: string = date.getMinutes().toString();
        if (MM.length < 2)
        {
            MM = '0' + MM
        }

        return HH + ':' + MM;
    }
    GetTimeHHMMss(): ComputedRef{
        return this.NowDateTime.HHMMSS;
    }
    
    GetTimeHHMM(): ComputedRef {
        return this.NowDateTime.HHMM;
    }
}