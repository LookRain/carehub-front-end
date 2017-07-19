<template>
	<div class="row">
		<section class="col-lg-12 col-xs-12 connectedSortable">
			<div class="box box-warning">
				<div class="box-header">


					<i class="fa fa-map-marker"></i>

					<h3 class="box-title">
						Add ad-hoc Call
					</h3>
				</div>
				<div class="box-body">
				<mu-text-field label="Case ID(Auto Select the first result in the search result)" v-model="caseId"></mu-text-field><br>
				<mu-date-picker v-model="date" label="Date" hintText="Date" okLabel="Ok" cancelLabel="Cancel" :dateTimeFormat="enDateFormat"/><br>
				<mu-text-field label="Call Progress" v-model="progress"></mu-text-field><br>
				<mu-text-field label="Call Tyle" v-model="type"></mu-text-field><br>
				<!-- <mu-text-field label="User Email" v-model="email"></mu-text-field> -->
				
				<mu-raised-button label="Submit" @click="submit"></mu-raised-button>
				</div>
			</div>
		</section>
		<section class="col-lg-12 col-xs-12 connectedSortable">
			<div class="box box-danger">
				<div class="box-header">


					<i class="fa fa-map-marker"></i>

					<h3 class="box-title">
						Patient Details
					</h3>
				</div>
				<div class="box-body">
				<mu-table :showCheckbox="false">
					<mu-thead>
						<mu-tr>
						<!-- 	<mu-th>NRIC</mu-th> -->
							<mu-th>Case ID</mu-th>
							<mu-th>Status</mu-th>
							<mu-th>Tier</mu-th>
							<mu-th>Mean Test</mu-th>
							<mu-th>Date Added</mu-th>
							<mu-th>Ward Number</mu-th>
							<mu-th>Staff Assigned</mu-th>
						</mu-tr>
					</mu-thead>
					<mu-tbody>
						<mu-tr v-for="patient in matchedPatients" :key="patient.PId">
							<!-- <mu-td>{{ patient.NRIC }}</mu-td> -->
							<mu-td>{{ patient.CaseId }}</mu-td>
							<mu-td>{{ patient.PStatus | parseStatus }}</mu-td>
							<mu-td>{{ patient.Tier }}</mu-td>
							<mu-td>{{ patient.MeanTest }}</mu-td>
							<mu-td>{{ patient.PTimeStamp }}</mu-td>
							<mu-td>{{ patient.WardNo }}</mu-td>
							<mu-td>{{ patient.UserName }}</mu-td>
						</mu-tr>
					</mu-tbody>
				</mu-table>
				</div>
			</div>
		</section>
	</div>
</template>
<script>
import moment from 'moment'
import enDateFormat from '@/utils/DateFormat'


	export default {
		name: 'AdHocCall',
		data () {
			return {
				caseId: '',
				progress: '',
				date: '',
				type: '',
				email: '',
				matchedPatients: '',
				enDateFormat
			}	
		},
		watch: {
			caseId(val) {
				this.$get('searchpatients/values?info=' + val).then(response => {
						this.matchedPatients = response.data
					})
			}
		},
		methods: {
				submit() {
					this.$post('adhoc', {
						PatientId: this.matchedPatients[0].PId,
						Progress: this.progress,
						CallType: this.type,
						UserName: this.$store.state.user.Email,
						CallDate: this.date,
						CallNo: 0
					}).then(response=>{alert('Added!')})
				}
			},
		filters: {
			parseDate(date) {
	  		moment.locale('en-gb');
	  		return moment(date).format('lll')
	  	},
			parseStatus(code) {
				if (code === 0) { return 'Unprocessed'}
					if (code === 1) { return 'Recruited'}
						if (code === 2) { return 'Rejected'}
					}
			}
	}
</script>
<style lang="css" scoped>
</style>