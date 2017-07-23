<template>
	<div>
		<br>
		<div class="row">
			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-danger">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Patients To Call
						</h3>
					</div>
					<div class="box-body">

						<mu-text-field label="Search For Patient by Case ID" v-model="searchText"/><mu-raised-button label="Clear" @click="clearSearch"/>
						<table v-show="showFullTable">
							<tr>
			
									<!-- <th>Patient Name</th> -->
									<th>Case ID</th>
									<th>No. of Call</th>
									<th>Scheduled Date</th>
									<th>Tier</th>
									<th>Action</th>
								
							</tr>

							
								<tr v-for="call, index in allTasks" :key="index" @click="choosePatient(call)">
									<!-- <td>{{ call.PName }}</td> -->
									<td>{{ call.CaseId }}</td>
									<td>{{ call.CallNo | parseCallNo }}</td>
									<td>{{ call.CallDate | parseDate }}</td>
									<td>
										<mu-raised-button :label="call.Tier.toString()" @click="openElevate(call)" />
									</td>
									<td><mu-raised-button label="Complete" @click="open(call, index)" class="demo-raised-button" backgroundColor="red"/></td>

									

								</tr>
								
							
						</table>	
						<mu-dialog :open="dialog" title="Confirmation" @close="close">
										Have you completed your call to <b>{{ dialogCall.CaseId }}</b>?
										<br>
										Edit Remarks about patient
										<br>
										<mu-text-field fullWidth v-model="dialogCall.CallRemark" /><br/>
										<mu-flat-button slot="actions" @click="close" primary label="No"/>
										<mu-flat-button slot="actions" primary @click="confirmComplete" label="Yes"/>
									</mu-dialog>

									<mu-dialog :open="elevateDialog" title="Elevate Patient Tier" @close="closeElevate">
										Have you completed your call to <b>{{ dialogCall.CaseId }}</b>?
										<br>
										Choose the Tier to Elevate to
										<br>
										<mu-select-field autoWidth fullWidth v-model="elevatedTier" :labelFocusClass="['label-foucs']">
											<mu-menu-item v-for="item, index in tierList" :key="index" :value="index+1" :title="item"/>
										</mu-select-field>
										<mu-flat-button slot="actions" @click="closeElevate"  label="Close"/>
										<mu-flat-button slot="actions" primary @click="confirmElevate" label="Elevate"/>
									</mu-dialog>
						
						<table :showCheckbox="false" v-show="searchText">

								<tr>
									<!-- <th>Patient Name</th> -->
									<th>Case ID</th>
									<th>No. of Call</th>
									<th>Scheduled Date</th>
									<th>Tier</th>
									<th>Action</th>
								</tr>


								<tr v-for="call, index in searchResult" :key="index" @click="choosePatient(call)">
									<!-- <td>{{ call.PName }}</td> -->
									<td>{{ call.CaseId }}</td>
									<td>{{ call.CallNo | parseCallNo }}</td>
									<td>{{ call.CallDate | parseDate }}</td>
									<td><mu-raised-button :label="call.Tier.toString()" /></td>
									<td><mu-raised-button label="Complete" @click="openInSearchResult(call, index)" class="demo-raised-button" backgroundColor="red"/></td>
									
								</tr>
								

						</table>	
						<mu-dialog :open="dialog" title="Confirmation" @close="close">
										Have you completed your call to <b>{{ dialogCall.CaseId }}</b>?
										<br>
										Edit Remarks about patient
										<br>
										<mu-text-field fullWidth v-model="dialogCall.CallRemark" /><br/>
										<mu-flat-button slot="actions" @click="close" primary label="No"/>
										<mu-flat-button slot="actions" primary @click="confirmComplete" label="Yes"/>
									</mu-dialog>
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
							<mu-list-item><h3>Call Type: {{ activePatient.CallType }}</h3></mu-list-item>
							<mu-list-item><h3>Remark: {{ activePatient.CallRemark }}</h3></mu-list-item>
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
				dialogCallIndex: '',
				searchText:'',
				searchResult: [],
				elevateDialog: false,
				tierList: ['1','2','3'],
				activeElevatingCall: '',
				elevatedTier: ''
			}
		},
		computed: {
			username() {
				return this.$store.state.user.Email
			},
			showFullTable() {
				return !this.searchText
			}
		},
		methods: {
			test() {
				alert(123)
			},
			choosePatient (c) {
	  	// 	this.$get('patients/' + id).then(response => {
				// 	this.activePatient = response.data
				// })
				this.activePatient = c
			},
			open (call, index) {
				this.dialog = true
				this.dialogCall = call
				this.dialogCallIndex = index
			},
			openInSearchResult (call, index) {
				this.dialog = true
				this.dialogCall = call
				this.dialogCallIndex = this.allTasks.findIndex(task => {
					if (task.CallId === call.CallId) {
						return task
					}
				})
			},
			close () {
				this.dialog = false
			},
			confirmComplete() {
				/*
					update patient call remarks
					*/
					this.$put('patients/' + this.dialogCall.PatientId, {CallRemark: this.dialogCall.CallRemark}).then(
						response => {
							console.log('Success' + response.data)
						}).catch(err => {
							console.log(err.response.data.Message)
						})
				/*
					update patient call progress
					*/		
					this.$put('claimedcalls/' + this.dialogCall.CallId, 
					{
						Progress: this.COMPLETED_PROGRESS_ID,
						// UserName: this.$store.state.user.Email
					}).then(response=>{console.log(response.data)})

				// delete the task from the list
				this.allTasks.splice(this.dialogCallIndex, 1)
				this.close()
			},
			clearSearch() {
				this.searchText = ''
			},
			openElevate(call) {
				this.activeElevatingCall = call
				if (call.Tier === 3) {
					alert('Tier 3 patient cannot be elevated anymore!')
					return
				} else {
					this.elevateDialog = true
				}
			},
			closeElevate () {
				this.elevateDialog = false
			},
			confirmElevate(call) {
				if (this.elevatedTier < this.activeElevatingCall.Tier) {
					alert(`You must choose a Tier higher than the patient's current Tier!`)
					return
				}
				this.$put('patients/' + this.activeElevatingCall.PatientId, {Tier: this.elevatedTier}).then(response => {
					alert('Success!' + response.data)
					this.closeElevate()
					location.reload()
				}).catch(err => {
					alert('Something went wrong: ' + err.response.data.Message)
					this.closeElevate()
				})
			}
		},
		filters: {
			parseDate(date) {
				moment.locale('en-gb');
				return moment(date).format('ll')
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

		watch: {
			username(val) {
				if (val) {
					this.$get('claimedcalls/values?username=' + val).then(
						response => {
							this.allTasks = response.data
						})
				}
			},
			searchText(val) {
				if (val) {
					let result = this.allTasks.filter(task => {
						return  (task.CaseId.includes(val)) 
					})
					this.searchResult = result
				}
			},
			allTasks(val) {
				if (val) {
					let result = val.filter(task => {
						return  (task.CaseId.includes(this.searchText)) 
					})
					this.searchResult = result
				}
			}
		}
	}
</script>

<style lang="css" scoped>
th, td {
	border-bottom: 1px solid #ddd;
  padding: 15px;
}
tr:hover {
	background-color: #d2d5db;
}
</style>
