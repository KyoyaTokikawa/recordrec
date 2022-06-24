<template>
<div class="grid">
    <div class="col-12 md:col-4">
        <div class="card p-fluid">
            <div class="formgrid grid">
                <div class="field col" style="margin-bottom: 0px;">
                <AutoComplete placeholder="Search" id="dd" :dropdown="true" :multiple="false" v-model="state.selectedAutoValue" :suggestions="state.autoFilteredValue" @complete="searchCountry($event.query)" field="name"/>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-8">
            <div class="card p-fluid">
                <div class="formgrid grid">
                      <div class="field col" style="margin-bottom: 0px;">
                        <Clock :KbnDisplayDateTime="date"  @ChangeTime="changeTime" />
                        <Clock :KbnDisplayDateTime="clock" @ChangeTime="changeTime" />
                    </div>
                    <div class="field col" style="margin-bottom: 0px;">
                        <WaveButton :name="'出勤'" @click="ClickAttendance" />
                        <WaveButton :name="'退勤'" @click="ClickLeaving" />
                    </div>
                </div>
            </div>
        </div>
        <div class="col-12 md:col-12">
            <div style="width: 100%;">
                <AttendanceList :key="Ref" :datas="data" ref="component" />
            </div>
        </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, computed, reactive } from "vue";
import AttendanceList from '@/UI/components/Attendance/AttendanceList.vue';
import { DateTimeStore } from '@/class/store/DateTimeStore';
import { UserMasterClass } from "@/class/UserMasterClass";
import Clock from '@/UI/components/contlloer/Clock.vue'
import WaveButton from '@/UI/components/contlloer/WaveButton.vue'; // @ is an alias to /src
import RegisterCommutingTime from '@/process/Attendance/RegisterCommutingTime'
import UpdatingLeavingTime from '@/process/Attendance/UpdatingLeavingTime'
import {AttendanceTime} from '@/class/AttendanceTimeClass';
import GetdayAttendanceRecord from '@/process/Attendance/GetdayAttendanceRecord'

import Enumerable from "linq";

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
        const UserMasterStore : UserMasterClass = new UserMasterClass();
        const UserMaster = UserMasterStore.UserMaster
        let Nowtime = '';
        let NowDay = '';
        const clock: string = DateTimeStore.hhmmssspace
        const date: string = DateTimeStore.NowDay
        let data: AttendanceTimeList = new AttendanceTimeList();
        let Ref = ref(0); // こいつに反応して更新されている。

        const state = reactive({
            autoFilteredValue: [],
            selectedAutoValue: '',
        })

        onMounted(() => {
            const dateTimeClass = new DateTimeStore();
            NowDay = dateTimeClass.ValDate.value
            GetdayAttendanceRecord(dateTimeClass.ValDate.value, null,'mount').then(res => {
                data.value = res.reverse()
                Ref.value++;
            })
        })

        let ID = 'pegurin'; //  画面から取得
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

        const searchCountry = (search: string) => {
            setTimeout(() => {
                if (!search.trim().length)
                {
                    state.autoFilteredValue = UserMasterStore.UserMasterFileter
                }
            }, 250);
		}

        return {
            state,
            data,
            Ref,
            clock,
            date,
            changeTime,
            ClickAttendance,
            ClickLeaving,
            searchCountry
        }
    }
});

</script>

<style>

</style>