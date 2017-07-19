<template>
	<div class="row">
		<section class="col-lg-12 col-xs-12 connectedSortable">
			<div class="box box-primary">
				<div class="box-header">
					<i class="fa fa-map-marker"></i>
					<h3 class="box-title">
						Statistics Summary
					</h3>
				</div>

				<div class="box-body">
					
					<mu-date-picker v-model="startDate" label="Starting Date" hintText="Date" okLabel="Ok" cancelLabel="Cancel" :dateTimeFormat="enDateFormat"/><br>
					<mu-date-picker v-model="endDate" label="Ending Date" hintText="Date" okLabel="Ok" cancelLabel="Cancel" :dateTimeFormat="enDateFormat"/><br>
					<mu-raised-button primary label="Generate" @click="getSummary"></mu-raised-button>

					<!-- <p v-html="fullStats"></p> -->
				</div>
			</div>
		</section>

		<section class="col-lg-12 col-xs-12 connectedSortable" v-if="fullStats">
			<div class="box box-success">
				<div class="box-header">
					<i class="fa fa-map-marker"></i>
					<h3 class="box-title">
						Results
					</h3>
				</div>

				<div class="box-body">
					
					<mu-tabs :value="activeTab" @change="handleTabChange">
						<mu-tab value="tab1" title="Incoming Calls"/>
						<mu-tab value="tab2" title="Outgoing Calls"/>
						<mu-tab value="tab3" title="Hourly Summary"/>
					</mu-tabs>

					<div v-if="activeTab === 'tab1'">
						<h2>Incoming Calls</h2>

							<table class="myTable">
								<tr>
									<th>Staff</th>
									<th>Call Type</th> 
									<th>Count</th>
								</tr>
								<tr v-for="call in fullStats.IncomingCallsList">
									<td>{{ call.UserName }}</td>
									<td>{{ call.CallType | parseCallType }}</td> 
									<td>{{ call.Count }}</td>
								</tr>								
							</table>

					</div>
					<div v-if="activeTab === 'tab2'">
						<h2>Outgoing Calls</h2>
						<table class="myTable">
								<tr>
									<th>Staff</th>
									<th>Call Type</th> 
									<th>Count</th>
								</tr>
								<tr v-for="call in fullStats.OutgoingCallsList">
									<td>{{ call.UserName }}</td>
									<td>{{ call.CallType | parseCallType }}</td> 
									<td>{{ call.Count }}</td>
								</tr>								
							</table>
					</div>
					<div v-if="activeTab === 'tab3'">
						<h2>Hourly Summary</h2>
						<table class="myTable">
								<tr>
									<th>Hour</th>
									<th>Count</th>
								</tr>
								<tr v-for="call in fullStats.HourlyCallsList">
									<td>{{ call.HourTitile }}</td> 
									<td>{{ call.Count }}</td>
								</tr>								
							</table>
					</div>


					<!-- <p v-html="fullStats"></p> -->
				</div>
			</div>
		</section>

	</div>
</template>
<script>
	import enDateFormat from '@/utils/DateFormat'

	export default {
		name: 'StatsSummary',
		data () {
			return {
				enDateFormat,
				startDate: '',
				endDate: '',
				fullStats: '',
				activeTab: 'tab1'
			}
		},
		methods: {
			getSummary() {
				this.$get(`statistic/values?start=${this.startDate}&end=${this.endDate}`).then(res => {
					this.fullStats = res.data
				})
			},
			handleTabChange (val) {
				this.activeTab = val
			}
		},
		filters: {
			parseCallType(val) {
				if (val === 1) {
					return 'Outgoing'
				}
				if (val === 2) {
					return 'Incoming'
				}
				return 'Smth went wrong'
			}
		}
	}
</script>
<style lang="css" scoped>
.myTable { background-color:#eee;border-collapse:collapse; width:100%;}
.myTable th { background-color:#000;color:white;width:50%; }
.myTable td, .myTable th { padding:5px;border:1px solid #000; }
</style>