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

						<!-- <mu-text-field label="Search For Patient by Case ID" v-model="searchText"/><mu-raised-button label="Clear" @click="clearSearch"/> -->
						<mu-raised-button label="Clear" @click="clearSearch"/>
						<hr>
						<mu-radio label="1st Call" name="group" nativeValue="1" v-model="value" class="demo-radio"/> 
  					<mu-radio label="2nd Call" name="group" nativeValue="2" v-model="value"  class="demo-radio"/> 
  					<mu-radio label="3rd Call" name="group" nativeValue="3" v-model="value"  class="demo-radio"/> 
  					<mu-radio label="4th Call" name="group" nativeValue="4" v-model="value"  class="demo-radio"/> 
  					<mu-radio label="5th Call" name="group" nativeValue="5" v-model="value"  class="demo-radio"/> 
  					<mu-radio label="6th Call" name="group" nativeValue="6" v-model="value"  class="demo-radio"/> 
  					<mu-radio label="7th Call" name="group" nativeValue="7" v-model="value"  class="demo-radio"/>
  					<hr>
  					<mu-radio label="Oldest First" name="group" nativeValue="asc_date" v-model="value"  class="demo-radio"/>  
  					<mu-radio label="Newest First" name="group" nativeValue="desc_date" v-model="value"  class="demo-radio"/>  

						<mu-table :showCheckbox="false" v-show="!value">
							<mu-thead>
								<mu-tr>
									<!-- <mu-th>Patient Name</mu-th> -->
									<mu-th>Case ID</mu-th>
									<mu-th>No. of Call</mu-th>
									<mu-th>Scheduled Date</mu-th>
									<mu-th>Tier</mu-th>
									<mu-th>Action</mu-th>
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="call, index in allTasks" :key="index" @click.native="choosePatient(call)">
									<!-- <mu-td>{{ call.PName }}</mu-td> -->
									<mu-td>{{ call.CaseId }}</mu-td>
									<mu-td>{{ call.CallNo | parseCallNo }}</mu-td>
									<mu-td>{{ call.CallDate | parseDate }}</mu-td>
									<mu-td>
										<mu-raised-button :label="parseTier(call.Tier)" @click="openElevate(call)" />
									</mu-td>
									<mu-td><mu-raised-button label="Complete" @click="open(call, index)" class="demo-raised-button" backgroundColor="red"/></mu-td>
								</mu-tr>
								
							</mu-tbody>
						</mu-table>	

						<mu-dialog :open="dialog" title="Confirmation" @close="close">
							Have you completed your call to <b>{{ dialogCall.CaseId }}</b>?
							<br>
							Edit Remarks about patient
							<br>
							<mu-text-field fullWidth v-model="dialogCall.CallRemark" /><br/>
							<mu-flat-button slot="actions" @click="close" primary label="No"/>
							<mu-flat-button slot="actions" primary @click="confirmComplete" label="Yes"/>
						</mu-dialog>

						<mu-dialog :open="elevateDialog" title="Escalate Patient Tier" @close="closeElevate">
							Choose the Tier to Escalate to
							<br>
							<mu-select-field autoWidth v-model="elevatedTier" :labelFocusClass="['label-foucs']">
								<mu-menu-item v-for="item, index in tierList" :key="index" :value="index+1" :title="item"/>
							</mu-select-field>
							<mu-flat-button slot="actions" @click="closeElevate"  label="Close"/>
							<mu-flat-button slot="actions" primary @click="confirmElevate" label="Escalate"/>
						</mu-dialog>
						
						<mu-table :showCheckbox="false" v-show="value">
							<mu-thead>
								<mu-tr>
									<!-- <mu-th>Patient Name</mu-th> -->
									<mu-th>Case ID</mu-th>
									<mu-th>No. of Call</mu-th>
									<mu-th>Scheduled Date</mu-th>
									<mu-th>Tier</mu-th>
									<mu-th>Action</mu-th>
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="call, index in searchResult" :key="index" @click.native="choosePatient(call)">
									<!-- <mu-td>{{ call.PName }}</mu-td> -->
									<mu-td>{{ call.CaseId }}</mu-td>
									<mu-td>{{ call.CallNo | parseCallNo }}</mu-td>
									<mu-td>{{ call.CallDate | parseDate }}</mu-td>
									<mu-td><mu-raised-button :label="parseTier(call.Tier)" @click="openElevate(call)"/></mu-td>
									<mu-td><mu-raised-button label="Complete" @click="openInSearchResult(call, index)" class="demo-raised-button" backgroundColor="red"/></mu-td>
									
								</mu-tr>
								
							</mu-tbody>
						</mu-table>	

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
							<mu-list-item><h3>Call Type: {{ activePatient.CallType | parseCallType }}</h3></mu-list-item>
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
				// searchText:'',
				searchResult: [],
				elevateDialog: false,
				tierList: ['1','2','3'],
				activeElevatingCall: '',
				elevatedTier: '',
				value: ''
			}
		},
		computed: {
			username() {
				return this.$store.state.user.Email
			}
		},
		methods: {
			parseTier(t) {
				if (t) {
					return t.toString()
				} else {
					return t
				}
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
							location.reload()
						}).catch(err => {
							alert(err.response.data.Message)
							location.reload()
						})
				/*
					update patient call progress
					*/		
					this.$put('claimedcalls/' + this.dialogCall.CallId, 
					{
						Progress: this.COMPLETED_PROGRESS_ID,
						// UserName: this.$store.state.user.Email
					}).then(response=>{
						alert('Success' + response.data)
						location.reload()
					}).catch(err => {
							alert(err.response.data.Message)
							location.reload()
						})
				// delete the task from the list
				this.allTasks.splice(this.dialogCallIndex, 1)
				this.close()
			},
			clearSearch() {
				this.value = ''
			},
			openElevate(call) {
				this.activeElevatingCall = call
				if (call.Tier === 3) {
					alert('Tier 3 patient cannot be escalated anymore!')
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
			parseCallType(t) {
				if (t == 1) { return 'Outgoing' }
				if (t == 2) { return 'Incoming' }
				return 'undefined'
			},
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
			value(val) {
				let result = ''
				if (val) {
					if (Number.isInteger(parseInt(val))) {
						result = this.allTasks.filter(task => {
							return  (task.CallNo == val) 
						})
					} else {
						if (val === 'asc_date') {
							result = this.allTasks.map(a => {return {...a}})
							result.sort((a, b) => {
								return new Date(a.CallDate) - new Date(b.CallDate)
							})
						}
						if (val === 'desc_date') {
							result = this.allTasks.map(a => {return {...a}})
							result.sort((a, b) => {
								return new Date(b.CallDate) - new Date(a.CallDate)
							})
						}
					}
					this.searchResult = result
				}
			},
			allTasks(val) {
				let result = ''
				if (val) {
					if (Number.isInteger(parseInt(this.value))) {
						result = val.filter(task => {
							return  (task.CallNo == this.value) 
						})
					} else {
						if (this.value === 'asc_date') {
							result = val.map(a => {return {...a}})
							result.sort((a, b) => {
								return new Date(a.CallDate) - new Date(b.CallDate)
							})
						}
						if (this.value === 'desc_date') {
							result = val.map(a => {return {...a}})
							result.sort((a, b) => {
								return new Date(b.CallDate) - new Date(a.CallDate)
							})
						}
					}
					this.searchResult = result
				}
		}
	}
}
</script>

<style lang="css" scoped>

</style>