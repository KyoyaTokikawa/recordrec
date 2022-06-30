<template>
<div class="grid">
    <div class="col-7 md:col-7">
        <div class="field col" style="width: 100%;">
            <div class="card">  
                <div class="field col-6 formgroup-inline" style="width: 100%; margin: 0px;">
                    <InputFloatLabelText :Label_Name="Design.UserID"/>
                    <div class="col-offset-6 formgroup-inline">
                        <LoadButton ref="RefButton_Save"   :label="Design.ButtonLabel_Save"   :icon="Design.icon_Save" @ClickEvent="ClickEvent_Save"/>
                        <LoadButton ref="RefButton_Update" :label="Design.ButtonLabel_Update" :icon="Design.icon_Update" @ClickEvent="ClickEvent_Update"/>
                    </div>
                </div> 
                <h5 style="text-align: left;">UserProfile</h5>
                <h6 style="text-align: left;">UserName</h6>
                <div class="field col formgroup-inline" style="width: 100%;">
                    <InputFloatLabelText :Label_Name="Design.FamilyName"/>
                    <InputFloatLabelText :Label_Name="Design.FirstName"/>
                    <InputFloatLabelText :Label_Name="Design.MiddleName"/>
                </div>
                <h6 style="text-align: left;">BirthDay</h6>
                <div class="field col formgroup-inline" style="width: 100%;">
                    <InputFloatLabelNumber ref="InputYear"  :Label_Name="Design.Year"  :MaxValue="Design.MaxYear"      :MinValue="Design.MinYear"        :Grouping="Design.Grouping" @BlurEvent="CalcMaxDay"/>
                    <InputFloatLabelNumber ref="InputMonth" :Label_Name="Design.Month" :MaxValue="Design.MaxMonth"     :MinValue="Design.MinMonth"       :Grouping="Design.Grouping" @BlurEvent="CalcMaxDay"/>
                    <InputFloatLabelNumber ref="InputDay"   :Label_Name="Design.Day"   :MaxValue="Design.MaxDay.value" :MinValue="Design.MinDay.value"   :Grouping="Design.Grouping" @FocusEvent="CalcMaxDay"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent, ref } from "vue";
import LoadButton from "../../components/contlloer/Button/LoadButton.vue";
import InputFloatLabelNumber from "../../components/contlloer/InputFloatLabelNumber.vue";
import InputFloatLabelText from "../../components/contlloer/InputFloatLabelText.vue";
import UserMasterDesignClass from "./UserMasterDesignClass"
export default defineComponent({
    components:{
        InputFloatLabelText,
        InputFloatLabelNumber,
        LoadButton
    },
    setup(){
        const InputYear        = ref<InstanceType<typeof InputFloatLabelNumber>>()
        const InputMonth       = ref<InstanceType<typeof InputFloatLabelNumber>>()
        const InputDay         = ref<InstanceType<typeof InputFloatLabelNumber>>()
        const RefButton_Save   = ref<InstanceType<typeof LoadButton>>()
        const RefButton_Update = ref<InstanceType<typeof LoadButton>>()

        // 型定義ファイルを作った方がいい
        const Design = new UserMasterDesignClass()

        const ClickEvent_Save = () => {
            setTimeout(() => {
                RefButton_Save.value?.loadstop()
            }, 3000)
        }

        const ClickEvent_Update = () => {
            setTimeout(() => {
                RefButton_Update.value?.loadstop()
            }, 3000)
        }

        const CalcMaxDay = () => {
            const SelectYear  = InputYear.value?.value;
            const SelectMonth = InputMonth.value?.value
            console.log(`SelectMonth:${SelectMonth} SelectYear${SelectYear}`)
            if (SelectYear !=  null && SelectMonth != null )
            {
                Design.MaxDay.value = (new Date(SelectYear, SelectMonth, 0)).getDate();
                console.log(`MAXDAY:${Design.MaxDay.value} Year${SelectYear}`)
            }
        }

        return {
            Design,
            InputYear,
            InputMonth,
            InputDay,
            RefButton_Save,
            RefButton_Update,
            ClickEvent_Save,
            ClickEvent_Update,
            CalcMaxDay
        }
    }
})
</script>
