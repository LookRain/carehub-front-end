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
				<mu-text-field label="patient ID" v-model="id"></mu-text-field><br>
				<mu-date-picker label="Date" hintText="Date" okLabel="Ok" cancelLabel="Cancel" :dateTimeFormat="enDateFormat"/><br>
				<mu-text-field label="Call Progress" v-model="progress"></mu-text-field><br>
				<mu-text-field label="Call Tyle" v-model="type"></mu-text-field><br>
				<mu-text-field label="User Email" v-model="email"></mu-text-field>
				
				<mu-raised-button label="Submit" @click="submit"></mu-raised-button>
				</div>
			</div>
		</section>
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
		name: 'AdHocCall',
		data () {
			return {
				id: '',
				progress: '',
				type: '',
				email: '',
				enDateFormat
			}	
		},
		methods: {
				submit() {
					this.$post('adhoc', {
						PatientId: this.id,
						Progress: this.progress,
						CallType: this.type,
						UserName: this.email
					}).then(response=>{alert('Added!')})
				}
			}
	}
</script>
<style lang="css" scoped>
</style>