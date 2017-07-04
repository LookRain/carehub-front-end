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
							<mu-tab value="tab2" title="Patients History" :style="styleObject"/>
						</mu-tabs>
						<div v-if="activeTab === 'tab1'">
							<br>

							<mu-table :showCheckbox="false">
								<mu-thead>
									<mu-tr>
										<mu-th>Patient Name/ID</mu-th>
										<mu-th>Date</mu-th>
										<mu-th>Tier</mu-th>
										<mu-th>Action</mu-th>
									</mu-tr>
								</mu-thead>
								<mu-tbody>
									<mu-tr v-for="task, index in tasks" :key="index">
										<mu-td>{{task.PName}}</mu-td>
										<mu-td>{{task.PTimeStamp}}</mu-td>
										<mu-td>
											<mu-select-field v-model="task.PTier" :labelFocusClass="['label-foucs']">
												<mu-menu-item v-for="item, index in tierList" :key="index" :value="index+1" :title="item"/>
											</mu-select-field>
										</mu-td>
										<!-- <mu-td>{{task.PStatus}}</mu-td> -->
										<mu-raised-button label="Recruit" backgroundColor="green" @click="recruit(task)"/>
										<mu-raised-button label="Reject" backgroundColor="red" @click="reject"/>
									</mu-tr>


								</mu-tbody>
							</mu-table>	



						</div>
						<div v-if="activeTab === 'tab2'">

							<mu-tbody>



										<!-- <mu-tr>
											<mu-td>Steve Brown</mu-td>
											<mu-td>Rejected <i class="fa fa-circle fa-lg text-red"></i></mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/>

										</mu-tr> -->
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
		import AvContentHeader from '../components/AvContentHeader.vue'

		export default {
			name: 'HospitalTasks',

			data () {
				return {
					tasks: [],
					game1: 0,
					activeTab: 'tab1',
					styleObject: {
						color: '#000000'
					},
					tierList: ['1','2','3']
				}
			},
			components: {
				AvContentHeader,
				'full-calendar': require('vue-fullcalendar')
			},
			methods: {
				recruit(input, index) {
					let patientID = input.PId
					let patientNRIC = {
						PatientId: input.NRIC
					}
					this.$put('patients/' + patientID, input).then(
						response => {
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
							console.log(input.PId)
							
							this.tasks.splice(0,1)
						},
						reject() {
							console.log('clicked reject')
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
							}
						}
					},
					created() {

					}
				}
			</script>

			<style lang="css" scoped>
				.my-tabs {

					background-color: #ffffff;

				}
			</style>
