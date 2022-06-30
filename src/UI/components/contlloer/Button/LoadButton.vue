<template>
<div class="field">
    <Button type="button" :label="label" :icon="icon" :loading="loading" @click="load" />
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
    name: "LoadButton",
    props:{
        label: String,
        icon: String
    },
    emits:["ClickEvent"],
    setup(props, context){
        const loading = ref<boolean>(false);
        const load = () => {
            loading.value = true
            context.emit("ClickEvent");
        }
        const loadstop = () => { loading.value = false }
        return {
            loading,
            load,
            loadstop
        }
    }
})

</script>