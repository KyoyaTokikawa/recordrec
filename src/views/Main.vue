<template>
<div class="col-1 md:col-12">
    <div class="card p-fluid">
        <div class="formgrid grid">
            <div class="field col" style="margin-bottom: 0px;">
                <div style="font-size: 100px; "><Clock :KbnValueDateTime="value" @ChangeTime="changeTime"/></div>
            </div>
            <div class="field col" style="margin-bottom: 0px;">
                <div style="width: 400px; font-size: 80px;">
                    <WaveButton :name="'出勤'" @click="ClickAttendance()"/>
                </div>
            </div>
            <div class="field col" style="margin-bottom: 0px;">
                <div style="width: 400px; font-size: 80px;">
                    <WaveButton :name="'退勤'" @click="ClickLeaving" />
                </div>
            </div>
        </div>
    </div>
</div>

<AttendanceList :key="id" :datas="data" ref="component"/>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import AttendanceList from '@/components/Attendance/AttendanceList.vue';
import { AxiosClass } from '@/class/API/AxiosClass'
import { DateTimeStore } from '@/class/store/DateTimeStore';
import { UserMasterClass } from "@/class/UserMasterClass";
import Clock from '@/components/contlloer/Clock.vue'
import WaveButton from '@/components/contlloer/WaveButton.vue'; // @ is an alias to /src

interface IFAttendanceTime
{
    ID: number,
    Name: string,
    Commutingtime: string,
    Leavingtime: string
}

export class AttendanceTime
{
    value:IFAttendanceTime[] = [];
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
        let data: AttendanceTime = new AttendanceTime();
        let id = ref(0);
        let ID = 0;
        const UserMaster = new UserMasterClass();
        const ClickAttendance = () => {
            let data_: IFAttendanceTime| undefined = data.value.find(x => x.Commutingtime !='' && x.Leavingtime == '');
            if (typeof(data_) == 'undefined')
            {
                data_ = { ID: ++ID, Name: 'toki', Commutingtime: Nowtime, Leavingtime: ''};
                const jsondata_ = { UserID: 1, Name: 'toki', CommutingTime: Nowtime };
                const post: AxiosClass = new AxiosClass('/api/sql/RegisterCommutingTime', jsondata_);
                post.POST();
                data.value.push(data_);
                data.value.reverse()
            }
            else
            {
                alert('退勤処理がされていません。')
            }
            id.value++;
        };

        const ClickLeaving = () => {
            let data_: IFAttendanceTime| undefined = data.value.find(x => x.Leavingtime == '');
            if (typeof(data_) != 'undefined')
            {
                data_.Leavingtime = Nowtime;
                id.value++;
            }
        }
        
        const changeTime = ((time: string) => {
            Nowtime = time;
        })

        return {
            data,
            id,
            value,
            changeTime,
            ClickAttendance,
            ClickLeaving
        }
    }
});

</script>
