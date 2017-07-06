<template>
	<div>
		<br>
		<div class="row">
			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-solid bg-red-gradient">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Patients To Call
						</h3>
					</div>
					<div class="box-body">
						<mu-table :showCheckbox="false">
							<mu-thead>
								<mu-tr>
									<mu-th>Patient Name</mu-th>
									<mu-th>NRIC</mu-th>
									<mu-th>No. of Call</mu-th>
									<mu-th>Mark</mu-th>
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="call, index in allTasks" :key="index" @click.native="choosePatient(index)">
									<mu-td>{{ call.PName }}</mu-td>
									<mu-td>{{ call.NRIC }}</mu-td>
									<mu-td>{{ call.CallNo | parseCallNo }}</mu-td>
									<mu-td><mu-raised-button label="Complete" class="demo-raised-button" backgroundColor="red"/></mu-td>
								</mu-tr>
								
							</mu-tbody>
						</mu-table>	
						
						
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
						<mu-list :selectable="false">

							<mu-list-item title="Patient Name" :selectable="false"><h3>{{ activePatient }}</h3>


								<mu-raised-button label="Add ad hoc" primary @click="open('bottom')"></mu-raised-button>

								<div>



									<mu-popup position="bottom" popupClass="demo-popup-bottom" :open="bottomPopup" @close="close('bottom')">
										<mu-appbar title="Add ad hoc">
											<mu-flat-button slot="right" label="close" color="white" @click="close('bottom')"/>
										</mu-appbar>
										<mu-content-block>
											
											<div class="col-lg-8 col-xs-12">
												<mu-date-picker hintText="Pick A Date" :dateTimeFormat="enDateFormat"/>
											</div>
											<div class="col-lg-4 col-xs-12">
												<mu-raised-button label="Add" primary/>
											</div>
										</mu-content-block>
									</mu-popup>

								</div>
							</mu-list-item>
							
						</mu-list>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	const dayAbbreviation = ['S', 'M', 'T', 'W', 'T', 'F', 'S']
	const dayList = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
	const monthList = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep',
	'Oct', 'Nov', 'Dec']
	const monthLongList = ['January', 'February', 'March', 'April', 'May', 'June',
	'July', 'August', 'September', 'October', 'November', 'December']

	const enDateFormat = {
		formatDisplay (date) {
			return `${dayList[date.getDay()]}, ${monthList[date.getMonth()]} ${date.getDate()}`
		},
		formatMonth (date) {
			return `${monthLongList[date.getMonth()]} ${date.getFullYear()}`
		},
		getWeekDayArray (firstDayOfWeek) {
			let beforeArray = []
			let afterArray = []
			for (let i = 0; i < dayAbbreviation.length; i++) {
				if (i < firstDayOfWeek) {
					afterArray.push(dayAbbreviation[i])
				} else {
					beforeArray.push(dayAbbreviation[i])
				}
			}
			return beforeArray.concat(afterArray)
		}
	}
	export default {

		name: 'CallTasks',

		data () {
			return {
				allTasks: '',
				enDateFormat,
				activePatient: '',
				bottomPopup: false,
				topPopup: false,
				leftPopup: false,
				rightPopup: false
			}
		},
		computed: {
	    username() {
	    	return this.$store.state.user.Email
	    }
	  },
	  methods: {
	  	choosePatient (id) {
	  		let index = id - 1
	  		console.log(this.patients[index])
	  		this.activePatient = this.patients[index]
	  	},
	  	open (position) {
	  		this[position + 'Popup'] = true
	  	},
	  	close (position) {
	  		this[position + 'Popup'] = false
	  	}
	  },
	  filters: {
	  	parseCallNo(val) {
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
	  	topPopup (val) {
	  		if (val) {
	  			setTimeout(() => {
	  				this.topPopup = false
	  			}, 2000)
	  		}
	  	}
	  }
	}
</script>

<style lang="css" scoped>
</style>
