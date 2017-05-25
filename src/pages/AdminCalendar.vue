<template>
	<div>
		<av-content-header primary='Home' secondary='Calendar and History'></av-content-header>
		<br>
		

		<div class="row">
			<section class="col-lg-12 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">
						<i class="fa fa-map-marker"></i>
						<h3 class="box-title">
							Calendar of All Events
						</h3>
					</div>
					<div class="box-body">
						<full-calendar :events="fcEvents" locale="en"></full-calendar>
					</div>
				</div>
				<div class="box box-warning">
					<div class="box-header">
						<i class="fa fa-map-marker"></i>
						<h3 class="box-title">
							History
						</h3>
					</div>
					<div class="box-body">
						<div>
							<mu-tabs :value="activeTab" @change="handleTabChange" class="my-tabs" >
								<mu-tab value="tab1" title="Patients by Team" :style="styleObject"/>
								<mu-tab value="tab2" title="Patients by Tier" :style="styleObject"/>
							</mu-tabs>
							<div v-if="activeTab === 'tab1'">
								<br>
								<i class="material-icons">date_range</i><mu-date-picker hintText="From Date"/>  <i class="material-icons">date_range</i><mu-date-picker hintText="Until Date"/> <br/>
								<h3>Hospital Team</h3>
								<mu-table :showCheckbox="false">
									<mu-thead>
										<mu-tr>
											<mu-th>Staff Name/ID</mu-th>
											<mu-th>No. Patients Handled</mu-th>
										</mu-tr>
									</mu-thead>
									<mu-tbody>
										<mu-tr>
											<mu-td>John Smith</mu-td>
											<mu-td>5 <i class="fa fa-circle fa-lg text-green"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Randal White</mu-td>
											<mu-td>10 <i class="fa fa-circle fa-lg text-orange"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Stephanie Sanders</mu-td>
											<mu-td>22 <i class="fa fa-circle fa-lg text-red"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Steve Brown</mu-td>
											<mu-td>23 <i class="fa fa-circle fa-lg text-red"></i></mu-td>

										</mu-tr>
									</mu-tbody>
								</mu-table>	

								<h3>Call Centre Team</h3>
								<mu-table :showCheckbox="false">
									<mu-thead>
										<mu-tr>
											<mu-th>Staff Name/ID</mu-th>
											<mu-th>No. Patients Handled</mu-th>
										</mu-tr>
									</mu-thead>
									<mu-tbody>
										<mu-tr>
											<mu-td>John Smith</mu-td>
											<mu-td>5 <i class="fa fa-circle fa-lg text-green"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Randal White</mu-td>
											<mu-td>10 <i class="fa fa-circle fa-lg text-orange"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Stephanie Sanders</mu-td>
											<mu-td>22 <i class="fa fa-circle fa-lg text-red"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Steve Brown</mu-td>
											<mu-td>23 <i class="fa fa-circle fa-lg text-red"></i></mu-td>

										</mu-tr>
									</mu-tbody>
								</mu-table>	


								<h3>Home Visit Team</h3>
								<mu-table :showCheckbox="false">
									<mu-thead>
										<mu-tr>
											<mu-th>Staff Name/ID</mu-th>
											<mu-th>No. Patients Handled</mu-th>
										</mu-tr>
									</mu-thead>
									<mu-tbody>
										<mu-tr>
											<mu-td>John Smith</mu-td>
											<mu-td>5 <i class="fa fa-circle fa-lg text-green"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Randal White</mu-td>
											<mu-td>10 <i class="fa fa-circle fa-lg text-orange"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Stephanie Sanders</mu-td>
											<mu-td>22 <i class="fa fa-circle fa-lg text-red"></i></mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>Steve Brown</mu-td>
											<mu-td>23 <i class="fa fa-circle fa-lg text-red"></i></mu-td>

										</mu-tr>
									</mu-tbody>
								</mu-table>	


							</div>
							<div v-if="activeTab === 'tab2'">
								
								<mu-table :showCheckbox="false">
									<mu-thead>
										<mu-tr>
											<mu-th>Tier</mu-th>
											<mu-th>No. Patients Handled</mu-th>
										</mu-tr>
									</mu-thead>
									<mu-tbody>
										<mu-tr>
											<mu-td>1 <i class="fa fa-circle fa-lg text-green"></i></mu-td>
											<mu-td>5</mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>2 <i class="fa fa-circle fa-lg text-orange"></i></mu-td>
											<mu-td>10</mu-td>

										</mu-tr>
										<mu-tr>
											<mu-td>3 <i class="fa fa-circle fa-lg text-red"></i></mu-td>
											<mu-td>22</mu-td>

										</mu-tr>
									
									</mu-tbody>
								</mu-table>	



							</div>
							
						</div>

					</div>
				</div>
			</section>	
		</div>
	</div>
</template>

<script>
	import AvContentHeader from '../components/AvContentHeader.vue'

	var demoEvents = [
	  {
	    title: 'Sunny Out of Office',
	    start: '2016-08-25',
	    end: '2017-07-27'
	  },
	  {
	    title: '123',
	    start: '2017-05-25',
	    end: '2017-05-25'
	  },
	  {
	    title: '123',
	    start: '2017-05-25',
	    end: '2017-05-25'
	  }
	]
	export default {
	  name: 'AdminCalendar',

	  data () {
	    return {
	      fcEvents: demoEvents,
	      activeTab: 'tab1',
	      styleObject: {
	        color: '#000000'
	      }
	    }
	  },
	  components: {
	    AvContentHeader,
	    'full-calendar': require('vue-fullcalendar')
	  },
	  methods: {
	    handleTabChange (val) {
	      this.activeTab = val
	    }
	  }
	}
</script>

<style lang="css" scoped>
	.my-tabs {

		background-color: #ffffff;

	}
</style>
