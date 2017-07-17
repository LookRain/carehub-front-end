<template>
	<div class="row">
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
										<mu-raised-button label="Recruit" backgroundColor="green" @click="openRecruit(task)"/>
										<mu-raised-button label="Reject" backgroundColor="red" @click="openReject(task, index)"/>
									</mu-tr>


								</mu-tbody>
							</mu-table>	

							<mu-dialog :open="recruitDialogOpen" title="Confirmation" @close="closeRecruit">
								Are you sure you want to <b>recruit</b> {{ activePatient.CaseId }} ?

								<!-- <mu-text-field multiLine fullWidth v-model="dialogCall.CallRemark" /><br/> -->
								<mu-flat-button slot="actions" @click="closeRecruit" primary label="No"/>
								<mu-flat-button slot="actions" primary @click="confirmRecruit" label="Yes"/>
							</mu-dialog>

							<mu-dialog :open="rejectDialogOpen" title="Confirmation" @close="closeReject">
								Are you sure you want to <b>reject</b> {{ activePatient.CaseId }} ?
								<br>
								Edit Remarks about patient
								<br>
								<!-- <mu-text-field multiLine fullWidth v-model="dialogCall.CallRemark" /><br/> -->
								<mu-flat-button slot="actions" @click="closeReject" primary label="No"/>
								<mu-flat-button slot="actions" primary @click="" label="Yes"/>
							</mu-dialog>

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
									<mu-tr v-for="task, index in history" :key="index">
										<mu-td>{{ task.CaseId }}</mu-td>
										<mu-td>{{ task.PTimeStamp | parseDate }}</mu-td>
										<mu-td>
											<mu-select-field v-model="task.Tier" :labelFocusClass="['label-foucs']">
												<mu-menu-item v-for="item, index in tierList" :key="index" :value="index+1" :title="item"/>
											</mu-select-field>
										</mu-td>
										<mu-td>{{ task.PStatus | parseStatus }}</mu-td>
										<!-- <mu-td>{{task.PStatus}}</mu-td> -->
										<mu-raised-button label="Recruit" backgroundColor="green" @click="openRecruit(task)"/>
										<mu-raised-button label="Reject" backgroundColor="red" @click="openReject(task, index)"/>
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
				activePatient: ''
			}
		},
		components: {
			AvContentHeader,
			'full-calendar': require('vue-fullcalendar')
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
			openRecruit(p) {
				this.selectActivePatient(p)
				this.recruitDialogOpen = true
			},
			openReject(p, i) {
				this.selectActivePatient(p)
				this.rejectDialogOpen = true
			},
			closeRecruit (p) {
				this.recruitDialogOpen = false
			},
			closeReject (p) {
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

					this.tasks.splice(0,1)
				},

				reject(input, index) {
					let patientID = input.PId
					let patientNRIC = {
						PatientId: input.PId
					}
					this.$put('patients/' + patientID, this.setStatusReject(input)).then(
						response => {
							console.log('Patient Rejected' + response.data)
						}).catch(err => {
							console.log(err.response.data.Message)
						})

						console.log('clicked reject')
						this.tasks.splice(index, 1)

					},
					handleTabChange (val) {
						this.activeTab = val
					}
				},
				computed: {
					username() {
						return this.$store.state.user.Email
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
