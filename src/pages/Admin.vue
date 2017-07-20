<template>
	<div>
		<br>
		<div class="row">
			<div class="col-lg-6 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-teal">
					<div class="inner">
						<h3>{{ callNo }}</h3>

						<p>Calls made in these months</p>
						<h3 style="white-space: normal;">Call Centre Past Months Stats</h3>
						 <call-chart></call-chart>
					</div>
					<div class="icon">
						<i class="ion ion-bag"></i>
					</div>
					
				</div>
			</div>
			<!-- ./col -->
			<div class="col-lg-6 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-teal">
					<div class="inner">
						<h3>{{ patientNo }}</h3>

						<p>Patient Entries in These Months</p>
						<h3 style="white-space: normal;">Patient Entry Past Months Stats</h3>
						 <patient-chart></patient-chart>
					</div>
					<div class="icon">
						<i class="ion ion-bag"></i>
					</div>
					
				</div>
			</div>
			<!-- ./col -->
		</div>
		<div class="row">
			<section class="col-lg-6 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">
						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Upload Excel
						</h3>
					</div>
					<div class="box-body" style="overflow: hid den;">
						<div class="container">
							<mu-text-field hintText="Please upload excel or csv file"/><br/>
							<div class="excel-upload">
								<mu-raised-button label="Upload Excel" default onclick="document.getElementById('csv').click();"/>
								<input type="file" style="display:none;" id="csv" name="file"/>
							</div>
							<br>
							<hr>

							<br>
							<!-- <router-link to="/assign_patient"> -->
							<mu-raised-button label="Submit" primary @click="parseCSV"/>
							<!-- </router-link> -->

						</div>


					</div>
					<!-- /.box-body-->

				</div>
			</section>
			<section class="col-lg-6 col-xs-6 connectedSortable">
				<div class="box box-success">
					<div class="box-header">
						<h3 class="box-title">Add A Patient</h3>
					</div>
					<div class="box-body" display="block" style="word-break:break-all;">
						<mu-text-field hintText="Name" v-model="name"/><br/>
						<mu-text-field hintText="NRIC" v-model="nric"/><br/>
						<mu-text-field hintText="Mean Test" v-model="meanTest"/><br/>
						<mu-text-field hintText="Ward Number" v-model="wardNumber"/><br/>
						<mu-text-field hintText="Region" v-model="region"/><br/>						
						<mu-raised-button label="Add" primary @click="addPatient"></mu-raised-button>
					</div>
				</div>
			</section>


		</div>
		<div class="row" v-show="isNewPatientAdded">
			<section class="col-lg-12 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">
						<h3 class="box-title">New Patients Added</h3>
					</div>
					<div class="box-body" display="block" style="word-break:break-all;">
						{{ returnedPatient }}
					</div>
				</div>
			</section>
		</div>

		<div class="row">		
			<section class="col-lg-6 col-xs-12 connectedSortable">
				<div class="box box-warning">
					<div class="box-header">

						<h3 class="box-title">
							Hospital Team Staff Workload
						</h3>
					</div>

					<div class="box-body">
						<mu-table :showCheckbox="showCheckbox">
							<mu-thead>
								<mu-tr>
									<mu-th>Name</mu-th>
									<!-- <mu-th>Email</mu-th> -->
									<mu-th>Workload</mu-th>							
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="user in hosWorkload">
									<mu-td>{{ user.DisplayedName }}</mu-td>
									<!-- <mu-td>{{ user.UserName }}</mu-td> -->
									<mu-td>{{ user.Workload }}</mu-td>
								</mu-tr>
							</mu-tbody>
						</mu-table>
					</div>
				</div>
			</section>
			<section class="col-lg-6 col-xs-12 connectedSortable">
				<div class="box box-primary">
					<div class="box-header">

						<h3 class="box-title">
							Call Centre Staff Workload
						</h3>
					</div>

					<div class="box-body">
						<mu-table :showCheckbox="showCheckbox">
							<mu-thead>
								<mu-tr>
									<mu-th>Name</mu-th>
									<!-- <mu-th>Email</mu-th> -->
									<mu-th>Workload</mu-th>							
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="user in callWorkload">
									<mu-td>{{ user.DisplayedName }}</mu-td>
									<!-- <mu-td>{{ user.UserName }}</mu-td> -->
									<mu-td>{{ user.Workload }}</mu-td>
								</mu-tr>
							</mu-tbody>
						</mu-table>
					</div>
				</div>
			</section>
		</div>   

	</div>
</template>

<script>
	import AvContentHeader from '../components/AvContentHeader.vue'
	import CallChart from './CallChart.js'
	import PatientChart from './PatientChart.js'
	export default {
		components: { AvContentHeader, CallChart, PatientChart},
		name: 'Admin',

		data () {
			return {
				callNo: 0,
				patientNo: 0,				
				hosWorkload: '',
				callWorkload: '',
				parsedResult: '',
				isNewPatientAdded: false,
				showCheckbox: false,
				allusers: '',
				name: '',
				nric: '',
				meanTest: '',
				region: '',
				wardNumber: '',
				returnedPatient: ''
			}
		},
		computed: {
			usergroup() {
				return this.$store.state.user.UserGroup
			}
		},
		methods: {

			parseCSV() {
				let reader = new FileReader()
				reader.onload = ()=> {
					this.$store.commit('setCSV', reader.result)
						// this.parsedResult = reader.result
						
					}
					let fileInput = document.getElementById("csv")
					reader.readAsText(fileInput.files[0])

					this.$router.push({name: 'AssignPatient'})
				},
				clearPatientFields() {
					this.name = ''; this.nric = ''; this.meanTest=''; this.region=''; this.wardNumber = '';
				},
				addPatient() {
					// if (!(this.name && this.nric && this.meanTest && this.region && this.wardNumber)) {
					// 	alert('Please fill in all patient information!')
					// } else {
						this.$post('/Patients', {
							'NRIC': this.nric,
							'PName': this.name,
							'MeanTest': this.meanTest,
							'WardNo': this.wardNumber,
							'Region': this.region,
							'PStatus': 0
						}).then((response) => {
							this.returnedPatient = response.data
							alert('Added successfully!' + this.returnedPatient.PName)
							this.clearPatientFields()
							this.isNewPatientAdded = true
						}).catch((err) => {
							alert(err.response.data.Message)
						})
					// }
				}	
			},
			mounted () {
				if (this.$store.state.user.UserGroup === 3) {
					this.$router.push('call_tasks')
				}
				if (this.$store.state.user.UserGroup === 2) {
					this.$router.push('hospital_tasks')
				}
	
				
			},
			created() {

				

				if (this.$store.state.user.UserGroup === 3) {
					this.$router.push('call_tasks')
				}
				if (this.$store.state.user.UserGroup === 2) {
					this.$router.push('hospital_tasks')
				}

				this.$get('AllUsers').then(response=> {
					this.allusers = response.data
				})
				this.$get('hospitalteamworkload').then(response=> {
					this.hosWorkload = response.data
				})
				this.$get('callcentreteamworkload').then(response=> {
					this.callWorkload = response.data
				})

				this.$get('callchart').then(response => {
					let temp = response.data
					temp.forEach(item => {
						this.callNo += parseInt(item.Cases)
					})
				})

				this.$get('patiententrychart').then(response => {
					let temp = response.data
					temp.forEach(item => {
						this.patientNo += parseInt(item.Cases)
					})
				})

				
			},
			watch: {
				usergroup(val) {
					if (val === 3) {
					this.$router.push('call_tasks')
					}
					if (val === 2) {
						this.$router.push('hospital_tasks')
					}
				}
			}
		}
	</script>

	<style lang="css" scoped>
.bg-teal{
	background-color: #212733 !important;
}
	</style>

