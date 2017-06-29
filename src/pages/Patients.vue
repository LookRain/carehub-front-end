<template>
	<div>
		<mu-pagination :total="total" :current="current" :defaultPageSize="numPerPage" @pageChange="handleClick">
 		</mu-pagination>

		<ul>
			<li v-for="patient in currentPatients">{{ patient.PId }}, {{ patient.NRIC }}, {{ patient.PName }}, {{ patient.PStatus }}</li>
		</ul>

		<mu-raised-button @click="submit" label="Add New" class="demo-raised-button" secondary/>
		<mu-raised-button @click="update" label="update" class="demo-raised-button" secondary/>
		
	</div>
</template>

<script>
	// import UserInfo from '../components/UserInfo'

	export default {

		name: 'Patients',

		data () {
			return {
				test: 6,
				current: 1,
				allPatients: [],
				currentPage: 1,
				numPerPage: 20
			}
		},
		methods: {
			changeCurrentPatients() {
				this.currentPatients = this.allPatients.slice(this.currentPage * 1 - 1, this.currentPage * 1 - 1 + this.currentPage * 10)
			},
			submit() {
				window.axios.post('/api/Patients', this.samplePatient).then((response) => { console.log(response.data)})
			},
			update() {
				window.axios.put('/api/Patients/1', this.samplePatient2).then((response) => { console.log(response.data)})
			},
			handleClick (newIndex) {
				this.currentPage = newIndex
    	}
		},
		computed: {
			currentPatients() {
				return this.allPatients.slice((this.currentPage - 1) * this.numPerPage, (this.currentPage) * this.numPerPage)
			},
			total() {
				return parseInt(this.allPatients.length)
			}
		},
		created() {

			this.$get('Patients').then((response) => {this.allPatients = response.data})

		}
	}
</script>

<style lang="css" scoped>
</style>