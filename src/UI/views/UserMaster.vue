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
                    <InputFloatLabelText :Label_Name="Year"/>
                    <InputFloatLabelText :Label_Name="Month"/>
                    <InputFloatLabelText :Label_Name="Day"/>
                </div>
            </div>
        </div>
    </div>
</div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import InputFloatLabelText from "../components/contlloer/InputFloatLabelText.vue";

export default defineComponent({
    components:{
        InputFloatLabelText
    },
    setup(){
        const UserID ='UserID'
        const FirstName = 'FirstName'
        const FamilyName = 'FamilyName'
        const MiddleName = 'MiddleName'
        const Year = 'Year'
        const Month = 'Month'
        const Day = 'Day'
        return {
            UserID,
            FirstName,
            FamilyName,
            MiddleName,
            Year,
            Month,
            Day,
        }
    }
})
</script>
