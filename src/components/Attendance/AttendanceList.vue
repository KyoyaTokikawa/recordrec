<template>
<div class="card">
	<h5>Attendance time</h5>
	<DataTable :value="datas?.value" :paginator="true" class="p-datatable-gridlines" :rows="10" dataKey="id" :rowHover="true" >
        <template #empty>
            No data.
        </template>
        <template #loading>
            Loading data. Please wait.
        </template>
        <Column field="name" header="Name" style="min-width:12rem">
            <template #body="{data}">
                {{data.Name}}
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
        </Column>
        <Column field="commutingtime" header="Commuting Time" style="min-width:12rem">
            <template #body="{data}">
                {{data.Commutingtime}}
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
        </Column>
        <Column field="leavingtime" header="Leaving Time" style="min-width:12rem">
            <template #body="{data}">
                {{data.Leavingtime}}
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
        </Column>        
	</DataTable>
</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { AttendanceTime } from "@/views/Main.vue";
export default defineComponent({
    props:{
        datas: AttendanceTime
    }
});

</script>