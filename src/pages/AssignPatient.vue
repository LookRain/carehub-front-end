<template>
	<div>
		<br>
		
		{{parsed}}
		<div class="row">
			<section class="col-lg-12 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Assign Patients
						</h3>
					</div>
					<div class="box-body">
				


							<mu-table :showCheckbox="false">
								<mu-thead>
									<mu-tr>
										<mu-th>Patient NRIC</mu-th>
										<mu-th>Patient Name</mu-th>
										<mu-th>Patient Ward</mu-th>
										<mu-th>Staff Assigned</mu-th>
									</mu-tr>
								</mu-thead>
								<mu-tbody>
									<mu-tr>
										<mu-td>1</mu-td>
										<mu-td>John Smith</mu-td>
										<mu-td>5</mu-td>
										<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
											<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
										</mu-select-field></mu-td>
									</mu-tr>
									<mu-tr>
										<mu-td>2</mu-td>
										<mu-td>Randal White</mu-td>
										<mu-td>21</mu-td>
										<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
											<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
										</mu-select-field></mu-td>
									</mu-tr>
									<mu-tr>
										<mu-td>3</mu-td>
										<mu-td>Stephanie Sanders</mu-td>
										<mu-td>22</mu-td>
										<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
											<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
										</mu-select-field></mu-td>
									</mu-tr>
									<mu-tr>
										<mu-td>4</mu-td>
										<mu-td>Steve Brown</mu-td>
										<mu-td>23</mu-td>
										<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
											<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
										</mu-select-field></mu-td>
									</mu-tr>
								</mu-tbody>
							</mu-table>	
					</div>
					<!-- /.box-body-->

				</div>
			</section>

			
		</div>

	</div>
</template>

<script>
	import AvContentHeader from '../components/AvContentHeader.vue'

	export default {
	  components: { AvContentHeader },
	  name: 'AssignPatient',

	  data () {
	    return {
	      game1: 0,
	      list: ['Staff 1', 'Staff 2', 'Staff 3', 'Staff 4', 'Staff 5', 'Staff 6'],
	      csvConfig: {
	      	colNumber: 6,
	      	hasHeader: true
	      }
	    }
	  },
	  methods: {

	  },
	  computed: {
	  	raw() {
	  		return this.$store.state.rawCSV
	  	},
	  	parsed() {
	  		let trimedCSV = this.raw.trim()
	  		let lineSplitCSV = trimedCSV.split('\r\n')
	  		let result = []
	  		lineSplitCSV.forEach(line => {
	  			let commaSeperatedString = line.split(',')

	  			let patient = {}
	  			patient.name = commaSeperatedString[0]
	  			patient.nric = commaSeperatedString[1]
	  			patient.meanTest = commaSeperatedString[2]
	  			patient.wardNo = commaSeperatedString[3]
	  			patient.region = commaSeperatedString[4]
	  			patient.status = commaSeperatedString[5]
	  			result.push(patient)
	  		})
	  		if (this.csvConfig.hasHeader) {
	  			return result.slice(1)
	  		} else {
	  			return result
	  		}
	  	}
	  },
	  methods: {

	  }
	}
</script>

<style lang="css" scoped>

</style>
