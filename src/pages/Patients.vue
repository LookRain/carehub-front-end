<template>
	<div>
		<div class="box box-warning">
			<div class="box-header">


				<i class="fa fa-map-marker"></i>

				<h3 class="box-title">
					Search
				</h3>
			</div>
			<div class="box-body">
				 <mu-text-field v-model="searchField"/>
				<br>
				<mu-raised-button label="search" @click="search" primary></mu-raised-button>
				<mu-table :showCheckbox="showCheckbox">
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
						<mu-tr v-for="patient in searchResult" :key="patient.PId">
							<!-- <mu-td>{{ patient.NRIC }}</mu-td> -->
							<mu-td>{{ patient.CaseId }}</mu-td>
							<mu-td>{{ patient.PStatus | parseStatus }}</mu-td>
							<mu-td>{{ patient.Tier }}</mu-td>
							<mu-td>{{ patient.MeanTest }}</mu-td>
							<mu-td>{{ patient.PTimeStamp | parseDate }}</mu-td>
							<mu-td>{{ patient.WardNo }}</mu-td>
							<mu-td>{{ patient.UserName }}</mu-td>
						</mu-tr>
					</mu-tbody>
				</mu-table>
			</div>
			</div>
		<div class="box box-success">
			<div class="box-header">


				<i class="fa fa-map-marker"></i>

				<h3 class="box-title">
					All Patients
				</h3>
			</div>
			<div class="box-body">
				<mu-pagination :total="total" :current="currentPage" :defaultPageSize="numPerPage" @pageChange="handleClick"  :showSizeChanger="showSizeChanger" :pageSizeOption="pageSizeOption" @pageSizeChange="handlePageSizeChange" :pageChangerText="'/Page'">
				</mu-pagination>

				<mu-table :showCheckbox="showCheckbox">
					<mu-thead>
						<mu-tr>
							<!-- <mu-th>NRIC</mu-th> -->
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
						<mu-tr v-for="patient in currentPatients" :key="patient.PId">
							<!-- <mu-td>{{ patient.NRIC }}</mu-td> -->
							<mu-td>{{ patient.CaseId }}</mu-td>
							<mu-td>{{ patient.PStatus | parseStatus }}</mu-td>
							<mu-td>{{ patient.Tier }}</mu-td>
							<mu-td>{{ patient.MeanTest }}</mu-td>
							<mu-td>{{ patient.PTimeStamp | parseDate }}</mu-td>
							<mu-td>{{ patient.WardNo }}</mu-td>
							<mu-td>{{ patient.UserName }}</mu-td>
						</mu-tr>
					</mu-tbody>
				</mu-table>
			</div>

		</div>
	</div>
</template>

<script>
	// import UserInfo from '../components/UserInfo'
import moment from 'moment'
	export default {

	  name: 'Patients',

	  data () {
	    return {
	      searchField: '',
	      searchResult: [],
	      showCheckbox: false,
	      allPatients: [],
	      currentPage: 1,
	      numPerPage: 20,
	      showSizeChanger: true,
	      pageSizeOption: [10, 20, 30, 40]
	    }
	  },
	  filters: {
	    parseDate (date) {
	  		moment.locale('en-gb')
  		return moment(date).format('ll')
	  	},
	    parseStatus (code) {
	      if (code === 0) { return 'Unprocessed' }
	      if (code === 1) { return 'Recruited' }
	      if (code === 2) { return 'Rejected' }
	    }
	  },
	  methods: {
	    search () {
	      this.$get('searchpatients/values?info=' + this.searchField).then(response => {
	        this.searchResult = response.data
	      })
	    },
	    changeCurrentPatients () {
	      this.currentPatients = this.allPatients.slice(this.currentPage * 1 - 1, this.currentPage * 1 - 1 + this.currentPage * 10)
	    },
	    handleClick (newIndex) {
	      this.currentPage = newIndex
	    },
	    handlePageSizeChange (newIndex) {
	      this.numPerPage = newIndex
	    }
	  },
	  computed: {
	    currentPatients () {
	      return this.allPatients.slice((this.currentPage - 1) * this.numPerPage, (this.currentPage) * this.numPerPage)
	    },
	    total () {
	      return parseInt(this.allPatients.length)
	    }
	  },
	  created () {
    this.$get('Patients').then((response) => { this.allPatients = response.data })
  }
	}
	</script>

	<style lang="css" scoped>
	</style>
