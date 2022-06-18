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
        <Column field="userid" header="UserId" style="width:10%">
            <template #body="{data}">
                {{data.UserId}}
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
        </Column>        
        <Column field="name" header="Name" style="width:10%">
            <template #body="{data}">
                {{data.Name}}
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
        </Column>
        <Column field="commutingtime" header="Commuting Time" style="width:12rem">
            <template #body="{data}">
                {{data.CommutingTime}}
            </template>
            <template #filter="{filterModel}">
                <InputText type="text" v-model="filterModel.value" class="p-column-filter" placeholder="Search by name"/>
            </template>
        </Column>
        <Column field="leavingtime" header="Leaving Time" style="width:12rem">
            <template #body="{data}">
                {{data.LeavingTime}}
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
import { AttendanceTimeList } from "@/views/Main.vue";

export default defineComponent({
    props:{
        datas:AttendanceTimeList
    }
});

</script>