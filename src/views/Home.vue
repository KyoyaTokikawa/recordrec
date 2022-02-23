<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <WaveButton :name=dateTime />
  </div>
		<div class="col-12 md:col-6">
			<div class="card p-fluid">
				<h5>Vertical</h5>
				<div class="field">
					<label for="name1">Name</label>
					<InputText id="name1" type="text" />
				</div>
				<div class="field">
					<label for="email1">Email</label>
					<InputText id="email1" type="text" />
				</div>
				<div class="field">
					<label for="age1">Age</label>
					<InputText id="age1" type="text" />
				</div>
			</div>

			<div class="card p-fluid">
				<h5>Vertical Grid</h5>
				<div class="formgrid grid">
					<div class="field col">
						<label for="name2">Name</label>
						<InputText id="name2" type="text" />
					</div>
					<div class="field col">
						<label for="email2">Email</label>
						<InputText id="email2" type="text" />
					</div>
					<div class="field col">
						<label for="email2">Email</label>
						<InputText id="email2" type="text" />
					</div>
				</div>
				<div class="formgrid grid">
					<div class="field col">
						<label for="name2">Name</label>
						<InputText id="name2" type="text" />
					</div>
					<div class="field col">
						<label for="email2">Email</label>
						<InputText id="email2" type="text" />
					</div>
					<div class="field col">
						<label for="email2">Email</label>
						<InputText id="email2" type="text" />
					</div>
				</div>

			</div>
		</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import WaveButton from '@/components/contlloer/WaveButton.vue'; // @ is an alias to /src
import { DateTimeStore } from '@/class/store/DateTimeStore';

export default defineComponent({
  name: 'Home',
  components: {
    WaveButton,
  },
  setup(){
	const dateTimeClass: DateTimeStore = new DateTimeStore();
	const dateTime = dateTimeClass.ValHHMM;
	return {
		dateTime
	}
  }
});
</script>
