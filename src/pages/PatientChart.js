import {Line} from 'vue-chartjs'

export default Line.extend({
	data() {
		return {
		}
	},
	mounted () {
		let labelArray = []
		let dataArray = []
		this.$get('patiententrychart').then(response => {

			let record = response.data

			record.forEach(item => {
				labelArray.push(item.Title)
				dataArray.push(item.Cases)
			})


			this.renderChart({
				labels: labelArray.reverse() ,
				datasets: [
				{
					label: 'Patients',
					backgroundColor: '#77181f',
					data: dataArray.reverse() 
				}
				]
			}, {responsive: true, maintainAspectRatio: false})

		})
	},
	created() {

	}
})