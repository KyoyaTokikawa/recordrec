import { computed, ComputedRef } from 'vue';
import { Store} from 'vuex'
import { State, ClassName, useStore } from '../store/index'

interface DateTimeName {
    name: string;
    date: ComputedRef;
}

export class DateTimeClass {
    Store: Store<State>;
    IntervalID: any;
    NowDateTime: DateTimeName =
    {
        name: "Date",
        date: this.GetComputed("Date")
    };

    constructor()
    {
        this.Store = useStore();
        this.IntervalID = setInterval(() => {
            this.Store.dispatch('change', { name:this.NowDateTime.name, value:this.GetTime() } as ClassName)
        });
    }

    GetComputed(label: string): ComputedRef
    {
        return (computed(() => this.Store.getters.getValue(label)));
    }

    GetTime(){
        const date = new Date();
        return date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds()
    }
}