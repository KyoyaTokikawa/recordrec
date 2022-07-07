<template>
<div>
    <AttendanceList :key="Ref" :datas="data" />
</div>
</template>
<script lang="ts">
import GetdayAttendanceRecord from "@/process/Attendance/GetdayAttendanceRecord";
import { defineComponent, onMounted, ref } from "vue";
import AttendanceList from '@/UI/components/Attendance/AttendanceList.vue';
import {AttendanceTimeList} from '@/class/AttendanceTimeClass';
export default defineComponent({
    name:'AttendanceView',
    components:{
        AttendanceList
    },
    setup()
    {
        let Ref = ref(0);
        let data: AttendanceTimeList = new AttendanceTimeList();
        onMounted(() => {
            const func = () => {
                GetdayAttendanceRecord(null, null,'mount', false).then(res => {
                        data.value = res.reverse()
                        Ref.value++
                    });
            }
            func()
        })
        return {
            data,
            Ref
        }
    }
})

</script>