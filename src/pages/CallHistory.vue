<template>
	<div>
		<br>
		<div class="row">
			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-solid bg-yellow-gradient">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Calls Made by Me
						</h3>
					</div>
					<div class="box-body">
						<mu-table :showCheckbox="false">
							<mu-thead>
								<mu-tr>
									<mu-th>Patient Name</mu-th>
									<mu-th>NRIC</mu-th>
									<mu-th>No. of Call</mu-th>
									<mu-th>Date</mu-th>
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="call, index in allTasks" :key="index" @click.native="choosePatient(call.PatientId)">
									<mu-td>{{ call.PName }}</mu-td>
									<mu-td>{{ call.NRIC }}</mu-td>
									<mu-td>{{ call.CallNo | parseCallNo }}</mu-td>
									<mu-td>{{ call.CallDate }}</mu-td>									
								</mu-tr>
								
							</mu-tbody>
						</mu-table>	
						
						
					</div>
					<!-- /.box-body-->

				</div>
			</section>

			<section class="col-lg-4 col-xs-12 connectedSortable">
				<div class="box box-primary">
					<div class="box-header">

						<h3 class="box-title">
							Patient Details
						</h3>
					</div>

					<div class="box-body">
						<mu-list>
							<!-- <mu-sub-header>Patient Name</mu-sub-header> -->
							<mu-list-item><h3>Name: {{ activePatient.PName }}</h3></mu-list-item>
							<mu-list-item><h3>NRIC: {{ activePatient.NRIC }}</h3></mu-list-item>
							<mu-list-item><h3>Tier: {{ activePatient.Tier }}</h3></mu-list-item>
							<mu-list-item><h3>Mean Test: {{ activePatient.MeanTest }}</h3></mu-list-item>
							<mu-list-item><h3>Ward Number: {{ activePatient.WardNo }}</h3></mu-list-item>
						</mu-list>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {

		name: 'CallHistory',

		data () {
			return {
				allTasks: '',				
				activePatient: '',
			}
		},
		computed: {
	    username() {
	    	return this.$store.state.user.Email
	    }
	  },
	  methods: {
	  	choosePatient (id) {
	  		this.$get('patients/' + id).then(response => {
					this.activePatient = response.data
				})
	  	}
	  },
	  filters: {
	  	parseCallNo(val) {
	  		if (val === 1) {
	  			return '1st Call'
	  		}
	  		if (val === 2) {
	  			return '2nd Call'
	  		}
	  		if (val === 3) {
	  			return '3rd Call'
	  		}
	  		if (val === 4) {
	  			return '4th Call'
	  		}
	  	}
	  },

	  created() {
	  	this.$get('claimedcallhistory/values?username=' + this.$store.state.user.Email).then(response=>{this.allTasks = response.data})

	  },
	  mounted() {
	  	
	  },
	  watch: {
	  	username(val) {
				if (val) {
					this.$get('claimedcallhistory/values?username=' + val).then(
					response => {
					this.allTasks = response.data
					})
				}
			}
	  }
	}
</script>

<style lang="css" scoped>
</style>
