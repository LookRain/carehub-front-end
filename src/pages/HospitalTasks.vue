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
										<mu-tr>
											<mu-td>John Smith</mu-td>
											<mu-td>5</mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/><mu-raised-button label="Reject" backgroundColor="red"/>
										</mu-tr>
										<mu-tr>
											<mu-td>Randal White</mu-td>
											<mu-td>10</mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/><mu-raised-button label="Reject" backgroundColor="red"/>

										</mu-tr>
										<mu-tr>
											<mu-td>Stephanie Sanders</mu-td>
											<mu-td>22</mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/><mu-raised-button label="Reject" backgroundColor="red"/>

										</mu-tr>
										<mu-tr>
											<mu-td>Steve Brown</mu-td>
											<mu-td>23</mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/><mu-raised-button label="Reject" backgroundColor="red"/>

										</mu-tr>
									</mu-tbody>
								</mu-table>	



							</div>
							<div v-if="activeTab === 'tab2'">
								
								<mu-tbody>
										<mu-tr>
											<mu-td>John Smith</mu-td>
											<mu-td>Rejected <i class="fa fa-circle fa-lg text-red"></i></mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/>
										</mu-tr>
										<mu-tr>
											<mu-td>Randal White</mu-td>
											<mu-td>Rejected <i class="fa fa-circle fa-lg text-red"></i></mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/>

										</mu-tr>
										<mu-tr>
											<mu-td>Stephanie Sanders</mu-td>
											<mu-td>Rejected <i class="fa fa-circle fa-lg text-red"></i></mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/>

										</mu-tr>
										<mu-tr>
											<mu-td>Steve Brown</mu-td>
											<mu-td>Rejected <i class="fa fa-circle fa-lg text-red"></i></mu-td>
											<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
											<mu-raised-button label="Recruit" backgroundColor="green"/>

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
	  name: 'HospitalTasks',

	  data () {
	    return {
	      fcEvents: demoEvents,
	      activeTab: 'tab1',
	      styleObject: {
	        color: '#000000'
	      },
	      list: ['Tier 1', 'Tier 2', 'Tier 3']
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
