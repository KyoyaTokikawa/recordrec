import { InjectionKey, computed, WritableComputedRef } from "vue";
import { createStore, useStore as baseUseStore, Store} from 'vuex'

// interfaceの定義
export interface ClassValue {
    [name: string] : any
}

export interface ClassName {
    name: string,
    value: any
}

// ストアの型定義
export interface State {
    value: ClassValue;
}

// InjectionKeyの実装
export const key: InjectionKey<Store<State>> = Symbol();

// Storeの作成
export const store = createStore<State>({
    state: {
        value: { "": 0 }
    },
    getters: {
        getValue: (state) => ( name: string ) => {
            return state.value[name] ? state.value[name] : null;
        }
    },
    actions: {
        change({ commit }, value: ClassValue){
            commit('change', { value: value });
        },
        add({ commit }, value: ClassValue){
            commit('add', {value: value})
        }
    },
    mutations: {
        change(state, { value }){
            state.value[value.name] = value.value;
        }
    }
});

export function GetLabelnameValue(labelname: string): WritableComputedRef<number>
{
    const store = useStore();
    return computed({
        get: () => store.state.value[labelname],
        set: (value) => store.dispatch('change', { name:labelname, value:value } as ClassValue)
      });
} 

export function SetLabelNameValue(labelname: string, value: any): WritableComputedRef<number>
{
    const store = useStore();
    store.dispatch('change', { name:labelname, value:value } as ClassValue);
    return computed({
        get: () => store.state.value[labelname],
        set: (value) => store.dispatch('change', { name:labelname, value:value } as ClassValue)
      });
}
// 独自のuseStoreメソッド
export function useStore(): Store<State>{
    // InjectionKeyをuseStoreメソッドに渡す
    return baseUseStore(key);
}