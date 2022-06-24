<template>
    <div class="col-1 md:col-12">
        <div class="card p-fluid">
            <div class="formgrid grid">
                <div class="field col" style="margin-bottom: 0px;">
                    <div style="font-size: 400%; ">
                        <Clock :KbnValueDateTime="value" @ChangeTime="changeTime" />
                    </div>
                </div>
                <div class="field col" style="margin-bottom: 0px;">
                    <div style="width: 400px; font-size: 400%;">
                        <WaveButton :name="'出勤'" @click="ClickAttendance()" />
                    </div>
                </div>
                <div class="field col" style="margin-bottom: 0px;">
                    <div style="width: 400px; font-size: 400%;">
                        <WaveButton :name="'退勤'" @click="ClickLeaving" />
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-1 md:col-12">
        <div style="width: 100%; font-size: 200%;">
            <AttendanceList :key="Ref" :datas="data" ref="component" />
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted } from "vue";
import AttendanceList from '@/components/Attendance/AttendanceList.vue';
import { DateTimeStore } from '@/class/store/DateTimeStore';
import { UserMasterClass } from "@/class/UserMasterClass";
import Clock from '@/components/contlloer/Clock.vue'
import WaveButton from '@/components/contlloer/WaveButton.vue'; // @ is an alias to /src
import RegisterCommutingTime from '@/process/Attendance/RegisterCommutingTime'
import UpdatingLeavingTime from '@/process/Attendance/UpdatingLeavingTime'
import {AttendanceTime} from '../class/AttendanceTimeClass';
import GetdayAttendanceRecord from '@/process/Attendance/GetdayAttendanceRecord'

export class AttendanceTimeList
{
    value:AttendanceTime[] = [];
}

export default defineComponent({
    name: "AttendanceTime",
    components:{
        Clock,
        WaveButton,
        AttendanceList,
    },
    setup(){
        let Nowtime = '';
        let NowDay = '';
        const value: string = DateTimeStore.DATETIME2

        let data: AttendanceTimeList = new AttendanceTimeList();
        let Ref = ref(0); // こいつに反応して更新されている。

        onMounted(() => {
            const dateTimeClass = new DateTimeStore();
            NowDay = dateTimeClass.ValDate.value
            GetdayAttendanceRecord(dateTimeClass.ValDateTime2.value, null,'mount').then(res => {
                data.value = res.reverse()
                Ref.value++;
            })
            const UserMaster : UserMasterClass = new UserMasterClass()
            console.log(UserMaster)
            // console.log(UserMaster.UserMaster[0])
        })

        let ID = 'penpen'; //  画面から取得
        const ClickAttendance = async () => {
            await RegisterCommutingTime(ID, new Date(Nowtime))
            GetdayAttendanceRecord(NowDay, [ID], 'update').then(res => {
                    data.value = res.reverse()
                    Ref.value++;
            })   
        };

        const ClickLeaving = async () => {
            await UpdatingLeavingTime(ID, new Date(Nowtime));
            GetdayAttendanceRecord(NowDay, [ID], 'update').then(res => {
                    data.value = res.reverse()
                    Ref.value++;
            })   
        }
        
        const changeTime = ((time: string) => {
            Nowtime = time;
        })

        return {
            data,
            Ref,
            value,
            changeTime,
            ClickAttendance,
            ClickLeaving,
        }
    }
});

</script>
