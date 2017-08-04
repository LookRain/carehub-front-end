import {Line} from 'vue-chartjs'

export default Line.extend({
  data () {
    return {
    }
  },
  mounted () {
    let labelArray = []
    let dataArray = []
    this.$get('callchart').then(response => {
      let record = response.data

      record.forEach(item => {
        labelArray.push(item.Title)
        dataArray.push(item.Cases)
      })

      this.renderChart({
        labels: labelArray.reverse(),
        datasets: [
          {
            label: 'Calls',
            backgroundColor: '#05CBE1',
            data: dataArray.reverse()
          }
        ]
      }, {responsive: true, maintainAspectRatio: false})
    })
  },
  created () {

  }
})
