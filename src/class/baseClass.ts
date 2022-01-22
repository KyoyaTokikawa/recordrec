import { computed, ComputedRef } from 'vue';
import { Store} from 'vuex'
import { State } from '../store/index'

export class baseClass {
    GetComputed(label: string, Store: Store<State>): ComputedRef
    {
        return (computed(() => Store.getters.getValue(label)));
    }
}