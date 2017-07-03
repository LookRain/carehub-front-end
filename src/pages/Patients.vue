<template>
	<div>
		<!-- <mu-pagination :total="sum" :current="currentPage" :defaultPageSize="numPerPage" @pageChange="handleClick">
 		</mu-pagination> -->

 		<mu-pagination :total="sum" :current="current" @pageChange="">
  </mu-pagination>

		<ul>
			<li v-for="patient in currentPatients">{{ patient.PId }}, {{ patient.NRIC }}, {{ patient.PName }}, {{ patient.PStatus }}</li>
		</ul>

		
	</div>
</template>

<script>
	// import UserInfo from '../components/UserInfo'

	export default {

		name: 'Patients',

		data () {
			return {
				sum: 200,
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