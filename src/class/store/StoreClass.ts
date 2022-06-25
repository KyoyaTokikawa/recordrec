import { computed, ComputedRef } from 'vue';
import { Store} from 'vuex'
import { State, ClassName, useStore } from '../../store/index'

export default class StoreClass
{
    Store: Store<State>;

    constructor()
    {
        this.Store = useStore();
    }

    protected GetComputed(label: string): ComputedRef
    {
        return (computed(() => this.Store.getters.getValue(label)));
    }

    protected Get(label: string): any
    {
        return this.Store.getters.getValue(label);
    }

    protected DispatchChange(value: ClassName): void
    {
        this.Store.dispatch('change', value);
    }
}