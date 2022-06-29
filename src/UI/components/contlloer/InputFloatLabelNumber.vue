<template>
    <div class="field">
        <span class="p-float-label">
            <InputNumber ref="componentRef" v-model="value" :min="MinValue" :max="MaxValue" :show-buttons="ShowButton" :useGrouping="Grouping" @focus="FocusEvent" />
            <label for="labelName">{{Label_Name}}</label>
        </span>                        
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
    name:'InputFloatLabelNumber',
    props:{
        Label_Name: String,
        MinValue: Number,
        MaxValue: Number,
        ShowButton: Boolean,
        Grouping: Boolean,
    },
    emits:["FocusEvent"],
    setup(props, context){

        const state = reactive({
            number: null as number | null
        })
        const value = ref<number | null>(null);
        const componentRef = ref<HTMLElement>()

        const Focus = () => {
            componentRef.value?.focus()
        }
        const FocusEvent = ()=> {
            context.emit("FocusEvent")
        }
        const Value = () => {
            return value
        }
        return {
            value,
            componentRef,
            state,
            Focus,
            FocusEvent,
            Value
        };
    }
})

</script>
<style lang="scss">
.field {
    margin: 0px;
}
</style>
