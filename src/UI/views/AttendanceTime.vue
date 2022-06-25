<template>
<div class="grid">
    <div class="col-12 md:col-4">
        <div class="card p-fluid">
            <div class="formgrid grid">
                <div class="field col" style="margin-bottom: 0px;">
                    <AutoCompleteSerch :autoFilteredValue='UserMasterFilter' @GetFilter="GetFilter"/>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-8">
            <div class="card p-fluid">
                <div class="formgrid grid">
                      <div class="field col" style="margin-bottom: 0px;">
                        <Clock :dateTime="state.date" :key="Ref" />
                        <Clock :dateTime="state.clock" :key="Ref"/>
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
import { defineComponent, ref, onMounted, onUpdated, onActivated, onBeforeMount, reactive } from "vue";
import AttendanceList from '@/UI/components/Attendance/AttendanceList.vue';
import AutoCompleteSerch from "../components/contlloer/AutoCompleteSerch.vue";
import Clock from '@/UI/components/contlloer/Clock.vue'
import WaveButton from '@/UI/components/contlloer/WaveButton.vue'; // @ is an alias to /src
import RegisterCommutingTime from '@/process/Attendance/RegisterCommutingTime'
import UpdatingLeavingTime from '@/process/Attendance/UpdatingLeavingTime'
import GetdayAttendanceRecord from '@/process/Attendance/GetdayAttendanceRecord'
import GetUserMaster from "@/process/master/GetUserMaster";
import DateTimeStore from '@/class/store/DateTimeStore';
import UserMasterClass from "@/class/UserMasterClass";
import { filterClass } from "@/class/API/class/master/interface/IFAutoCompleteFilter";
import {AttendanceTime} from '@/class/AttendanceTimeClass';

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
        AutoCompleteSerch
    },
    setup(){
        const UserMasterStore : UserMasterClass = new UserMasterClass();
        const UserMasterFilter: filterClass = new filterClass();
        const ClsDateTimeStore : DateTimeStore = new DateTimeStore();


        let data: AttendanceTimeList = new AttendanceTimeList();
        let Ref = ref(0); // こいつに反応して更新されている。
        const state = reactive({
            Nowtime : '',
            date    : '',
            clock   : '',
        })
        onMounted(() => {
            setInterval(() => {
                state.Nowtime = ClsDateTimeStore.ValDateTime2.value
                state.date = ClsDateTimeStore.ValNowDay.value
                state.clock = ClsDateTimeStore.ValHHMMSS.value
            });
            const func = () => {
                GetdayAttendanceRecord(state.Nowtime, null,'mount').then(res => {
                    data.value = res.reverse()
                    Ref.value++;
                });                
            };
            func()
            if (UserMasterStore.UserMaster == null || UserMasterStore.UserMaster.length == 0)
            {
                GetUserMaster();
            }
            UserMasterFilter.value = UserMasterStore.UserMasterFileter
            console.log('main mount')
        })

        

        let ID = 'pegurin'; //  画面から取得
        const ClickAttendance = async () => {
            await RegisterCommutingTime(ID, new Date(state.Nowtime))
            GetdayAttendanceRecord(state.Nowtime, [ID], 'update').then(res => {
                    data.value = res.reverse()
                    Ref.value++;
            })   
        };

        const ClickLeaving = async () => {
            await UpdatingLeavingTime(ID, new Date(state.Nowtime));
            GetdayAttendanceRecord(state.Nowtime, [ID], 'update').then(res => {
                    data.value = res.reverse()
                    Ref.value++;
            })   
        }
    

        const GetFilter = (() => {
            UserMasterFilter.value = UserMasterStore.UserMasterFileter;
        })

        return {
            data,
            Ref,
            state,
            UserMasterFilter,
            ClickAttendance,
            ClickLeaving,
            GetFilter
        }
    }
});

</script>

<style>

</style>