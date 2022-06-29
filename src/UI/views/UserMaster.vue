<template>
<div class="grid">
    <div class="col-12 md:col-12">
        <div class="field col" style="width: 100%;">
            <div class="card">  
                <div class="field col formgroup-inline" style="width: 100%; margin: 0px;">
                    <InputFloatLabelText :Label_Name="UserID"/>
                </div>
                <h5 style="text-align: left;">UserProfile</h5>
                <h6 style="text-align: left;">UserName</h6>
                <div class="field col formgroup-inline" style="width: 100%;">
                    <InputFloatLabelText :Label_Name="FamilyName"/>
                    <InputFloatLabelText :Label_Name="FirstName"/>
                    <InputFloatLabelText :Label_Name="MiddleName"/>
                </div>
                <h6 style="text-align: left;">BirthDay</h6>
                <div class="field col formgroup-inline" style="width: 100%;">
                    <InputFloatLabelNumber ref="InputYear"  :Label_Name="Year"  :MaxValue="MaxYear"  :MinValue="MinYear"  :Grouping="Grouping" />
                    <InputFloatLabelNumber ref="InputMonth" :Label_Name="Month" :MaxValue="MaxMonth" :MinValue="MinMonth" :Grouping="Grouping" />
                    <InputFloatLabelNumber ref="InputDay"   :Label_Name="Day"   :MaxValue="MaxDay"   :MinValue="MinDay"   :Grouping="Grouping" @FocusEvent="dayfocus"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent, ref, Ref } from "vue";
import InputFloatLabelNumber from "../components/contlloer/InputFloatLabelNumber.vue";
import InputFloatLabelText from "../components/contlloer/InputFloatLabelText.vue";
export default defineComponent({
    components:{
        InputFloatLabelText,
        InputFloatLabelNumber
    },
    setup(){
        const UserID     ='UserID';
        const FirstName  = 'FirstName';
        const FamilyName = 'FamilyName';
        const MiddleName = 'MiddleName';
        const Year       = 'Year';
        const MaxYear    = 9999;
        const MinYear    = 1990;
        const Month      = 'Month';
        const MaxMonth   = 12;
        const MinMonth   = 1;
        const Day        = 'Day';
        const MaxDay     = ref(31);
        const MinDay     = ref(1);
        const Grouping = false;
        const YeraEvent = 'InputYearMonth'
        const InputYear = ref<InstanceType<typeof InputFloatLabelNumber>>()
        const InputMonth = ref<InstanceType<typeof InputFloatLabelNumber>>()
        const InputDay = ref<InstanceType<typeof InputFloatLabelNumber>>()
        const InputEventYear = ((value: Ref<number>) => {
            InputYear.value?.value
            console.log(value)
        })

        const dayfocus = () => {
            console.log(InputYear.value?.value)
            console.log(InputMonth.value?.value)
        }

        return {
            UserID,
            FirstName,
            FamilyName,
            MiddleName,
            Year,
            Month,
            Day,
            MaxYear,
            MinYear,
            MaxMonth,
            MinMonth,
            MaxDay,
            MinDay,
            Grouping,
            YeraEvent,
            InputYear,
            InputMonth,
            InputDay,
            InputEventYear,
            dayfocus
        }
    }
})
</script>
