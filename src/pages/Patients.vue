<template>
	<div>
		<user-info user-name="test"></user-info>
		<ul>
			<li v-for="patient in patients">{{ patient.pId }}, {{ patient.nric }}, {{ patient.pName }}, {{ patient.pStatus }}</li>
		</ul>

		<mu-raised-button @click="submit" label="Add New" class="demo-raised-button" secondary/>
		<mu-raised-button @click="update" label="update" class="demo-raised-button" secondary/>
		
	</div>
</template>

<script>
	// import UserInfo from '../components/UserInfo'

	export default {

		name: 'Patients',
		// components: { UserInfo },

		data () {
			return {
				patients: 'sdf',
				samplePatient: {
					"nric": "ss1a11haha",
					"pName": "xaxa",
					"meanTest": "123",
					"wardNo": 2,
					// "pTimeStamp": "2017-06-15T11:24:16.3119047+08:00",
					"pStatus": 1,
					"region": "sample string 5",
					"userName": "brantscube@gmail.comg"
				},
				samplePatient2: {
					"pStatus": 999
				}
			}
		},
		methods: {
			submit() {
				window.axios.post('/api/Patients', this.samplePatient).then((response) => { console.log(response.data)})
			},
			update() {
				window.axios.put('/api/Patients/1', this.samplePatient2).then((response) => { console.log(response.data)})
			}
		},
		created() {
			window.axios.get('/api/Patients').then((response) => {this.patients = response.data})
		}
	}
</script>

<style lang="css" scoped>
</style>