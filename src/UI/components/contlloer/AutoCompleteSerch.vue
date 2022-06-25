<template>
    <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="false"
        v-model="state.selectedAutoValue" :suggestions="state.autoFilteredValue"
        @complete="searchUser($event.query)"
        field="name"
    />
</template>
<script lang="ts">
import { defineComponent, reactive } from "vue"
import { filterClass, filter } from "@/class/API/class/master/interface/IFAutoCompleteFilter" 
export default defineComponent({
    name: 'AutoCompleteSearch',
    props:{
        autoFilteredValue: filterClass
    },
    emits: ['GetFilter'],
    setup(props, context) {
        const state = reactive({
            autoFilteredValue: [] as filter[],
            selectedAutoValue: '' as string,
        })

        const searchUser = (search: string) => {
            setTimeout(() => {
                if (typeof(props.autoFilteredValue?.value) != 'undefined')
                {
                    if (props.autoFilteredValue.value.length == 0)
                    {
                        context.emit('GetFilter')
                    }
                    if (!search.trim().length && state.autoFilteredValue.length == 0)
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
		}
        return {
            state,
            searchUser
        }
    }
})

</script>