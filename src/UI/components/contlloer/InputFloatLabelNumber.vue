<template>
    <div class="field">
        <span class="p-float-label">
            <InputNumber ref="componentRefInput componentRef" v-model="value" :min="MinValue" :max="MaxValue" :show-buttons="ShowButton" :useGrouping="Grouping" @focus="FocusEvent" @blur="BlurEvent"/>
            <label for="labelName">{{Label_Name}}</label>
        </span>                        
    </div>
</template>
<script lang="ts">
import InputText from "primevue/inputtext";
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
    emits:["FocusEvent","BlurEvent"],
    setup(props, context){

        const value = ref<number | null>(null);
        const componentRef = ref<HTMLElement>()
        const componentRefInput = ref<InstanceType<typeof InputText>>()
        const Focus = () => {
            componentRef.value?.focus()
        }
        const FocusOut = () => {
            componentRef.value?.blur()
        }
        const FocusEvent = ()=> {
            context.emit("FocusEvent");
        }

        const BlurEvent = () => {
            // setTimeoutしないと、値が反映される前にイベントが実行されてしまう。
            setTimeout(() => {
                context.emit("BlurEvent");
            })
        }
        const Value = () => {
            return value
        }

        // 最大値、最小値の監視
        // フォーカスが当たって外れたときしか評価してくれないので
        setInterval(() => {
            if (props.MinValue != null && value.value != null)
            {
                if (props.MinValue >= value.value)
                {
                    value.value = props.MinValue
                }
            }
            if (props.MaxValue != null && value.value != null)
            {
                if (props.MaxValue <= value.value)
                {
                    value.value = props.MaxValue
                }
            }
        })
        return {
            value,
            componentRefInput,
            componentRef,
            Focus,
            FocusOut,
            FocusEvent,
            BlurEvent,
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
