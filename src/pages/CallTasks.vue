<template>
	<div>
		<br>
		<div class="row">
			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-solid bg-red-gradient">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Patients To Call
						</h3>
					</div>
					<div class="box-body">
						<mu-table :showCheckbox="false">
							<mu-thead>
								<mu-tr>
									<!-- <mu-th>Patient Name</mu-th> -->
									<mu-th>Case ID</mu-th>
									<mu-th>No. of Call</mu-th>
									<mu-th>Scheduled Date</mu-th>
									<mu-th>Action</mu-th>
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="call, index in allTasks" :key="index" @click.native="choosePatient(call.PatientId)">
									<!-- <mu-td>{{ call.PName }}</mu-td> -->
									<mu-td>{{ call.CaseId }}</mu-td>
									<mu-td>{{ call.CallNo | parseCallNo }}</mu-td>
									<mu-td>{{ call.CallDate | parseDate }}</mu-td>
									<mu-td><mu-raised-button label="Complete" @click="open(call, index)" class="demo-raised-button" backgroundColor="red"/></mu-td>
									<mu-dialog :open="dialog" title="Confirmation" @close="close">
										Have you completed your call to <b>{{ dialogCall.PName }}</b>?
										<mu-flat-button slot="actions" @click="close" primary label="No"/>
										<mu-flat-button slot="actions" primary @click="confirmComplete" label="Yes"/>
									</mu-dialog>
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
							<!-- <mu-list-item><h3>Name: {{ activePatient.PName }}</h3></mu-list-item> -->
							<mu-list-item><h3>Case ID: {{ activePatient.CaseId }}</h3></mu-list-item>
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
import moment from 'moment'

	export default {

		name: 'CallTasks',

		data () {
			return {
				allTasks: '',				
				activePatient: '',
				COMPLETED_PROGRESS_ID: 2,
				dialog: false,
				dialogCall: {},
				dialogCallIndex: ''
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
	  	},
	  	open (call, index) {
				this.dialog = true
				this.dialogCall = call
				this.dialogCallIndex = index
			},
			close () {
				this.dialog = false
			},
			confirmComplete() {
				this.$put('claimedcalls/' + this.dialogCall.CallId, 
					{
						Progress: this.COMPLETED_PROGRESS_ID,
						// UserName: this.$store.state.user.Email
					}).then(response=>{console.log(response.data)})
	  		this.allTasks.splice(this.dialogCallIndex, 1)
	  		this.close()
			}
	  },
	  filters: {
	  	parseDate(date) {
	  		moment.locale('en-gb');
	  		return moment(date).format('lll')
	  	},
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
	  		if (val === 5) {
	  			return '5th Call'
	  		}
	  	}
	  },

	  created() {
	  	this.$get('claimedcalls/values?username=' + this.$store.state.user.Email).then(response=>{this.allTasks = response.data})

	  },
	  mounted() {
	  	
	  },
	  watch: {
	  	username(val) {
				if (val) {
					this.$get('claimedcalls/values?username=' + val).then(
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
