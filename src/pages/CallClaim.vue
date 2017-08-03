<template>
	<div>
		<br>
		<div class="row">
			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-solid bg-green-gradient">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Today's Patients for claiming
						</h3>
					</div>
					<div class="box-body">
						<mu-table :showCheckbox="false">
							<mu-thead>
								<mu-tr>
									<!-- <mu-th>Patient Name</mu-th> -->
									<mu-th>Case ID</mu-th>
									<mu-th>No. of Call</mu-th>
									<mu-th>Tier</mu-th>
									<mu-th>Action</mu-th>
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="call, index in allCalls" :key="index" @click.native="choosePatient(call.PatientId)">
									<!-- <mu-td>{{ call.PName }}</mu-td> -->
									<mu-td>{{ call.CaseId }}</mu-td>
									<mu-td>{{ call.CallNo | parseCallNo }}</mu-td>
									<mu-td>{{ call.Tier }}</mu-td>
									<mu-td><mu-raised-button label="Claim" @click="open(call, index)" backgroundColor="green"/></mu-td>
									<mu-dialog :open="dialog" title="Confirmation" @close="close">
										Are you sure you want to claim the patient <b>{{ dialogCall.PName }}</b>?
										<mu-flat-button slot="actions" @click="close" primary label="Cancel"/>
										<mu-flat-button slot="actions" primary @click="confirmClaim" label="Yes"/>
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
	export default {

		name: 'CallClaim',

		data () {
			return {
				dialog: false,
				dialogCall: {},
				dialogCallIndex: '',
				allCalls: '',
				activePatient: '',
				CLAIMED_PROGRESS_ID: 1
			}
		},
		created() {
			this.$get('callcentre').then(response => {
				this.allCalls = response.data
			})
		},
		methods: {
			confirmClaim() {
				this.$put('claimedcalls/' + this.dialogCall.CallId, 
					{
						Progress: this.CLAIMED_PROGRESS_ID,
						UserName: this.$store.state.user.Email
					}).then(response=>{alert('Success! ' + response.data)}).catch(err => {
							alert(err.response.data.Message)
							location.reload()
						})
	  		this.allCalls.splice(this.dialogCallIndex, 1)
	  		this.close()
			},
			open (call, index) {
				this.dialog = true
				this.dialogCall = call
				this.dialogCallIndex = index
			},
			close () {
				this.dialog = false
			},

			choosePatient (id) {
				this.$get('patients/' + id).then(response => {
					this.activePatient = response.data
				})
			},

		},
		filters: {
	  	parseCallNo(val) {
				if (val === 0) {
					return 'ad hoc'
				}
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
	  }
}

</script>

<style lang="css" scoped>
</style>
