<template>
    <AutoComplete ref="componentRef" :placeholder="placeholder" id="dd" :dropdown="true" :multiple="false"
        v-model="state.selectedAutoValue" :suggestions="state.autoFilteredValue"
        @complete="searchUser($event.query)"
        field="name"
    />
</template>
<script lang="ts">
import { defineComponent, reactive, ref } from "vue"
import { filterClass, filter } from "@/class/API/class/master/interface/IFAutoCompleteFilter" 
import AutoComplete from "primevue/autocomplete"
export default defineComponent({
    name: 'AutoCompleteSearch',
    components:{AutoComplete},
    props:{
        autoFilteredValue: filterClass,
        placeholder: String
    },
    emits: ['GetFilter'],
    setup(props, context) {
        const state = reactive({
            autoFilteredValue: [] as filter[],
            selectedAutoValue: '' as string,
            inputvalue: '' as string
        })

        const componentRef = ref<HTMLElement>()
        const name = (() => {
            const value = state.selectedAutoValue as unknown as filter // 正直この書き方は微妙だけど、共通と思って諦める
            return value.name
        })

        const code = (() => {
            const value = state.selectedAutoValue as unknown as filter // 正直この書き方は微妙だけど、共通と思って諦める
            return value.code
        })
        
        const inputValue = (() => {
            return state.inputvalue
        })

        const Clear = (() => {
            state.selectedAutoValue = ''
        })
        const Componentfocus = (() => {
            componentRef.value?.focus()
        })

        const searchUser = (search: string) => {
            setTimeout(() => {
                if (typeof(props.autoFilteredValue?.value) != 'undefined')
                {
                    if (props.autoFilteredValue.value.length == 0)
                    {
                        context.emit('GetFilter')
                    }
                    if (!search.trim().length && state.autoFilteredValue.length == 0/* この条件がないと二回目が表示されない */)
                    {
                        state.autoFilteredValue = props.autoFilteredValue.value
                    }
                    else
                    {
                        state.autoFilteredValue = props.autoFilteredValue.value.filter((User):boolean => {
                            let bool = User.name.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
                            if (bool == false)
                            {
                                bool = User.code.toLocaleLowerCase().startsWith(search.toLocaleLowerCase());
                            }
                            return bool
                        })
                    }
                }
            }, 250);
            state.inputvalue = search;
		}
        return {
            state,
            componentRef,
            searchUser,
            name,
            code,
            inputValue,
            Componentfocus,
            Clear
        }
    }
})

</script>