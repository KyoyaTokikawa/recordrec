<template>
    <div class="field">
        <span class="p-float-label">
            <InputText ref="componentRef" type="text" v-model="value" />
            <label for="labelName">{{Label_Name}}</label>
        </span>                        
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
export default defineComponent({
    name:'InputFloatLabelText',
    props:{
        Label_Name: String
    },
    setup(){
        const value = ''
        const componentRef = ref<HTMLElement>()

        const Focus = () => {
            componentRef.value?.focus()
        }

        const Value = () => {
            return value
        }
        return {
            value,
            componentRef,
            Focus,
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
