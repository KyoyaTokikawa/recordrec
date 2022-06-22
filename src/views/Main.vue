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
import RegisterCommutingTime from '@/process/RegisterCommutingTime'
import UpdatingLeavingTime from '@/process/UpdatingLeavingTime'
import {AttendanceTime} from '../class/AttendanceTimeClass';
import SQLGetAttendanceRecords from '@/sql/query/SQLGetAttendanceRecords'
import {SQLResult} from '@/sql/query/base/SQLquerybase'
import Enumerable from "linq";

export class AttendanceTimeList
{
    value:AttendanceTime[] = [];
}

export default defineComponent({
    name: "Main",
    components:{
        Clock,
        WaveButton,
        AttendanceList,
    },
    setup(){
        let Nowtime = '';
        const value: string = DateTimeStore.DATETIME2
        let data: AttendanceTimeList = new AttendanceTimeList();
        let Ref = ref(0); // こいつに反応して更新されている。
        onMounted(() => {
            result(data).then(res => {
                data = res
                Ref.value++;
            })
        })

        const UserMaster = new UserMasterClass();
        let ID = 1; //  画面から取得
        const ClickAttendance = () => {
            console.log(new Date(Nowtime))
            RegisterCommutingTime(data.value, ID, new Date(Nowtime)).then(res => {
                data.value = res;
                Ref.value++;
            });
        };

        const ClickLeaving = () => {
           data.value = UpdatingLeavingTime(data.value, ID, Nowtime);
           Ref.value++;
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
async function result(datas: AttendanceTimeList)
{
    const GET = new SQLGetAttendanceRecords();
    await GET.GET().then((res: any) =>{
        res.forEach((element: SQLResult[]) => {
            let id: number = Enumerable.from(element)
                .where(x => x.colName == 'ID')
                .select(x => Number(x.value))
                .first();
            let userid: number = Enumerable.from(element)
                .where(x => x.colName == 'UserID')
                .select(x => Number(x.value))
                .first();
            let name: string = Enumerable.from(element)
                .where(x => x.colName == 'Name')
                .select(x => x.value)
                .first();
            let commutingtime: string = Enumerable.from(element)
                .where(x => x.colName == 'CommutingDateTime')
                .select(x => x.value)
                .first();
            let leavingtime: string| undefined = Enumerable.from(element)
                .where(x => x.colName == 'LeavingDateTime')
                .select(x => x.value)
                .firstOrDefault();
            const data:AttendanceTime = new AttendanceTime(
                id,
                userid,
                name,
                commutingtime ,
                typeof(leavingtime) != 'undefined' ? leavingtime : ''
            );
            datas.value.push(data)
        });
        return datas;
    })
    return datas;
}
</script>
