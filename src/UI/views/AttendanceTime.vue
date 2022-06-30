<template>
<div class="grid">
    <div class="col-12 md:col-4">
        <div class="field col" style="margin-bottom: 0px;">
            <div class="card p-fluid">
                <div class="formgrid grid">
                    <div class="field col" style="margin-bottom: 0px;">
                        <AutoCompleteSerch ref="AutoCompleteSerchRef" :autoFilteredValue='UserMasterFilter' :placeholder="label" @GetFilter="GetFilter"/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-12 md:col-8">
        <div class="field col" style="margin-bottom: 0px;">
            <div class="card p-fluid">
                <div class="formgrid grid">
                    <div class="field col" style="margin-bottom: 0px;">
                        <Clock :dateTime="state.date" />
                        <Clock :dateTime="state.clock"/>
                    </div>
                    <div class="field col" style="margin-bottom: 0px;">
                        <WaveButton :name="'出勤'" @click="ClickAttendance" />
                        <WaveButton :name="'退勤'" @click="ClickLeaving" />
                    </div>
                </div>
            </div>        
        </div>
    </div>
    <div class="col-12 md:col-12">
        <div class="field col" style="width: 100%; padding-bottom: 0px;">
            <AttendanceList :key="Ref" :datas="data" ref="component" />
        </div>
    </div>
</div>
</template>

<script lang="ts">
import { defineComponent, ref, onMounted, reactive } from "vue";
import AttendanceList from '@/UI/components/Attendance/AttendanceList.vue';
import AutoCompleteSerch from "../components/contlloer/AutoCompleteSerch.vue";
import Clock from '@/UI/components/contlloer/Clock.vue'
import WaveButton from '@/UI/components/contlloer/Button/WaveButton.vue'; // @ is an alias to /src
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
        const label = 'Input UserID or Select UserID/Name'

        const UserMasterStore  : UserMasterClass = new UserMasterClass();
        const UserMasterFilter : filterClass     = new filterClass();
        const ClsDateTimeStore : DateTimeStore   = new DateTimeStore();


        const AutoCompleteSerchRef = ref<InstanceType<typeof AutoCompleteSerch>>()
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
                state.date    = ClsDateTimeStore.ValNowDay.value
                state.clock   = ClsDateTimeStore.ValHHMMSS.value
            });
            // GetdayAttendanceRecord()は実行されず、GetUserMaster()は実行される。
            // というより、両方とも実行されているが、GetdayAttendanceRecord()のthen()の処理が実行されていない。
            // 実行する関数を作って、それを実行すればいける。
            const func = () => {
                console.log(state.Nowtime)
                state.Nowtime = ClsDateTimeStore.ValDateTime2.value
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

        let ID = ''; //  画面から取得
        const ClickAttendance = async () => {
            if (!AutoCompleteSerchRef.value) return
            ID = AutoCompleteSerchRef.value.InputValueOrCode()
            console.log(ID)
            await RegisterCommutingTime(ID, new Date(state.Nowtime))
                .then(() => AutoCompleteSerchRef.value?.Clear())
                .catch(() => {
                    AutoCompleteSerchRef.value?.Componentfocus()
                })
            GetdayAttendanceRecord(state.Nowtime, [ID], 'update').then(res => {
                    data.value = res.reverse()
                    Ref.value++;
            })   
        };

        const ClickLeaving = async () => {
            if (!AutoCompleteSerchRef.value) return
            ID = AutoCompleteSerchRef.value.InputValueOrCode()
            await UpdatingLeavingTime(ID, new Date(state.Nowtime))
                .then(() => AutoCompleteSerchRef.value?.Clear())
                    .catch(() => {
                        AutoCompleteSerchRef.value?.Componentfocus()
                    });
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
            AutoCompleteSerchRef,
            label,
            ClickAttendance,
            ClickLeaving,
            GetFilter
        }
    }
});

</script>

<style>

</style>