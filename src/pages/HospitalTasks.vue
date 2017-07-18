<template>
	<div class="row">
	<mu-dialog id="recruit_dialog" :open="recruitDialogOpen" title="Confirmation" @close="closeRecruit">
								Are you sure you want to <b>recruit</b> {{ activePatient.CaseId }} ?

								<!-- <mu-text-field multiLine fullWidth v-model="dialogCall.CallRemark" /><br/> -->
								<mu-flat-button slot="actions" @click="closeRecruit" primary label="No"/>
								<mu-flat-button slot="actions" primary @click="confirmRecruit" label="Yes"/>
							</mu-dialog>

							<mu-dialog id="reject_dialog" :open="rejectDialogOpen" title="Confirmation" @close="closeReject">
								Are you sure you want to <b>reject</b> {{ activePatient.CaseId }} ?
								<br>
								<br>
								Why did you reject this patient?
								<br>
								<mu-text-field fullWidth v-model="activePatient.Reason" /><br/>
								<mu-flat-button slot="actions" @click="closeReject" primary label="No"/>
								<mu-flat-button slot="actions" primary @click="confirmReject" label="Yes"/>
							</mu-dialog>
		<section class="col-lg-12 col-xs-12 connectedSortable">
			<div class="box box-success">
				<div class="box-header">


					<i class="fa fa-map-marker"></i>

					<h3 class="box-title">
						Patients Assigned
					</h3>
				</div>
				<div class="box-body">
					<div>
						<mu-tabs :value="activeTab" @change="handleTabChange" class="my-tabs" >
							<mu-tab value="tab1" title="Patients Assigned Today" :style="styleObject"/>
							<mu-tab value="tab2" title="Recruited" :style="styleObject"/>
							<mu-tab value="tab3" title="Rejected" :style="styleObject"/>
						</mu-tabs>
						<div v-if="activeTab === 'tab1'">
							<br>

							<mu-table :showCheckbox="false">
								<mu-thead>
									<mu-tr>
										<mu-th>Case ID</mu-th>
										<mu-th>Date</mu-th>
										<mu-th>Tier</mu-th>
										<mu-th>Action</mu-th>
									</mu-tr>
								</mu-thead>
								<mu-tbody>
									<mu-tr v-for="task, index in tasks" :key="index">
										<mu-td>{{task.CaseId}}</mu-td>
										<mu-td>{{task.PTimeStamp | parseDate}}</mu-td>
										<mu-td>
											<mu-select-field v-model="task.Tier" :labelFocusClass="['label-foucs']">
												<mu-menu-item v-for="item, index in tierList" :key="index" :value="index+1" :title="item"/>
											</mu-select-field>
										</mu-td>
										<!-- <mu-td>{{task.PStatus}}</mu-td> -->
										<mu-raised-button label="Recruit" backgroundColor="green" @click="openRecruit(task, index)"/>
										<mu-raised-button label="Reject" backgroundColor="red" @click="openReject(task, index)"/>
									</mu-tr>


								</mu-tbody>
							</mu-table>	

						</div>
						<div v-if="activeTab === 'tab2'">

							<mu-table :showCheckbox="false">
								<mu-thead>
									<mu-tr>
										<mu-th>Case ID</mu-th>
										<mu-th>Date</mu-th>
										<mu-th>Tier</mu-th>
										<mu-th>Status</mu-th>
										<mu-th>Action</mu-th>
									</mu-tr>
								</mu-thead>
								<mu-tbody>
									<mu-tr v-for="task, index in recruit_history" :key="index">
										<mu-td>{{ task.CaseId }}</mu-td>
										<mu-td>{{ task.PTimeStamp | parseDate }}</mu-td>
										<mu-td>{{ task.Tier }}</mu-td>
										<mu-td>{{ task.PStatus | parseStatus }}</mu-td>
										<!-- <mu-td>{{task.PStatus}}</mu-td> -->
										<mu-raised-button label="Reject" backgroundColor="red" @click="openReject(task, index)"/>
									</mu-tr>
								</mu-tbody>
							</mu-table>	

						</div>				

						<div v-if="activeTab === 'tab3'">

							<mu-table :showCheckbox="false">
								<mu-thead>
									<mu-tr>
										<mu-th>Case ID</mu-th>
										<mu-th>Date</mu-th>
										<mu-th>Tier</mu-th>
										<mu-th>Status</mu-th>
										<mu-th>Action</mu-th>
									</mu-tr>
								</mu-thead>
								<mu-tbody>
									<mu-tr v-for="task, index in reject_history" :key="index">
										<mu-td>{{ task.CaseId }}</mu-td>
										<mu-td>{{ task.PTimeStamp | parseDate }}</mu-td>
										<mu-td>
											<mu-select-field v-model="task.Tier" :labelFocusClass="['label-foucs']">
												<mu-menu-item v-for="item, index in tierList" :key="index" :value="index+1" :title="item"/>
											</mu-select-field>
										</mu-td>
										<mu-td>{{ task.PStatus | parseStatus }}</mu-td>
										<!-- <mu-td>{{task.PStatus}}</mu-td> -->
										<mu-raised-button label="Recruit" backgroundColor="green" @click="openRecruit(task, index)"/>
									</mu-tr>
								</mu-tbody>
							</mu-table>	

						</div>	
					</div>
				</div>
				<!-- /.box-body-->

			</div>


		</section>


	</div>
</template>

<script>
	import moment from 'moment'
	import AvContentHeader from '../components/AvContentHeader.vue'

	export default {
		name: 'HospitalTasks',

		data () {
			return {
				test: '',
				tasks: [],
				history: [],
				game1: 0,
				activeTab: 'tab1',
				styleObject: {
					color: '#000000'
				},
				tierList: ['1','2','3'],
				recruitDialogOpen: false,
				rejectDialogOpen: false,
				activePatient: '',
				activePatientIndex: -1
			}
		},
		components: {
			AvContentHeader
		},
		filters: {
			parseDate(date) {
				moment.locale('en-gb');
				return moment(date).format('lll')
			},
			parseStatus(val) {
				if (val === 0) { return 'UnProcessed'};
				if (val === 1) { return 'Recruited'};
				if (val === 2) { return 'Rejected'};
			}
		},
		methods: {
			selectActivePatient(p) {
				this.activePatient = p
			},
			openRecruit(p, i) {
				this.selectActivePatient(p)
				this.recruitDialogOpen = true
				this.activePatientIndex = i
			},
			openReject(p, i) {
				this.selectActivePatient(p)
				this.rejectDialogOpen = true
				this.activePatientIndex = i
			},
			closeRecruit () {
				this.recruitDialogOpen = false
			},
			closeReject () {
				this.rejectDialogOpen = false
			},
			setStatusRecruit(patient) {
				patient.PStatus = 1
				return patient
			},
			setStatusReject(patient) {
				patient.PStatus = 2
				return patient
			},
			// confirm recruit active patient
			confirmRecruit () {
				if (!this.activePatient.Tier) {
					alert('You must provide a Tier that the patient belongs to!')
					return;
				}
				let patientID = this.activePatient.PId
				let patientNRIC = {
					PatientId: this.activePatient.PId
				}
				this.$put('patients/' + patientID, this.setStatusRecruit(this.activePatient)).then(response => {
					console.log('Success' + response.data)
				}).catch(err => {
					console.log(err.response.data.Message)
				})

				this.$post('callcentre', patientNRIC).then(
					response => {
						console.log('Call centre update Success' + response.data)
					}).catch(
					err => {
						console.log(err.response.data.Message)
					})
					console.log(this.activePatient.PId)

					this.tasks.splice(this.activePatientIndex, 1)

					//close the dialog
					this.closeRecruit()
				},

				confirmReject() {
					let patientID = this.activePatient.PId
					let patientNRIC = {
						PatientId: this.activePatient.PId
					}
					this.$put('patients/' + patientID, this.setStatusReject(this.activePatient)).then(
						response => {
							console.log('Patient Rejected' + response.data)
						}).catch(err => {
							console.log(err.response.data.Message)
						})

						console.log('clicked reject')
						this.tasks.splice(this.activePatientIndex, 1)

						//close the dialog
						this.closeReject()
					},
					handleTabChange (val) {
						this.activeTab = val
					}
				},
				computed: {
					username() {
						return this.$store.state.user.Email
					},
					recruit_history() {
						return this.history.filter(task => {
							if (task.PStatus === 1) { // if the patient is recruited 
								return task
							}
						})
					},
					reject_history() {
						return this.history.filter(task => {
							if (task.PStatus === 2) { // if the patient is rejected 
								return task
							}
						})
					}
				},
				watch: {
					username(val) {
						if (val) {
							this.$get('assignedpatients/values?username=' + val).then(
								response => {
									this.tasks = response.data
								})
							this.$get('assignedpatientshistory/values?username=' + val).then(
								response => {
									this.history = response.data
								})
						}
					}
				},
				created() {
					this.$get('assignedpatients/values?username=' + this.$store.state.user.Email).then(
						response => {
							this.tasks = response.data
						})
					this.$get('assignedpatientshistory/values?username=' + this.$store.state.user.Email).then(
						response => {
							this.history = response.data
						})
				}
			}
		</script>

		<style lang="css" scoped>
			.my-tabs {

				background-color: #ffffff;

			}
		</style>
