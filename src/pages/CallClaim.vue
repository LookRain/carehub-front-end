<template>
	<div>
		<br>
		<div class="row">
			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-solid bg-green-gradient">
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
								<mu-tr @click.native="choosePatient(1)">
									<mu-td>A</mu-td>
									<mu-td>S123123</mu-td>
									<mu-td>1st Call</mu-td>
									<mu-td><mu-raised-button label="Claim" class="demo-raised-button" backgroundColor="green"/></mu-td>
								</mu-tr>
								<mu-tr @click.native="choosePatient(2)">
									<mu-td>B</mu-td>
									<mu-td>S123123</mu-td>
									<mu-td>3rd Call</mu-td>
									<mu-td><mu-raised-button label="Claim" class="demo-raised-button" backgroundColor="green"/></mu-td>
								</mu-tr>
								<mu-tr @click.native="choosePatient(3)">
									<mu-td>C</mu-td>
									<mu-td>S123123</mu-td>
									<mu-td>1st Call</mu-td>
									<mu-td><mu-raised-button label="Claim" class="demo-raised-button" backgroundColor="green"/></mu-td>
								</mu-tr>
								<mu-tr @click.native="choosePatient(4)">
									<mu-td>D</mu-td>
									<mu-td>S123123</mu-td>
									<mu-td>2nd Call</mu-td>
									<mu-td><mu-raised-button label="Claim" class="demo-raised-button" backgroundColor="green"/></mu-td>
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
						<mu-list>
							<mu-sub-header>Patient Name</mu-sub-header>
							<mu-list-item title="Name"><h3>{{ activePatient }}</h3>
								<mu-avatar src="" slot="leftAvatar"/>

								<i class="fa fa-circle text-red" slot="right"><b>50</b></i>
							</mu-list-item>
							
						</mu-list>
					</div>
				</div>
			</section>
		</div>
	</div>
</template>

<script>
	export default {

	  name: 'CallClaim',

	  data () {
	    return {
	      patients: ['Amy', 'Bob', 'Cindy', 'David'],
	      activePatient: ''
	    }
	  },
	  computed: {
	    // activePatient () {
	    //   return this.patients[0]
	    // }
	  },
	  methods: {
	    choosePatient (id) {
	      let index = id - 1
	      console.log(this.patients[index])
	      this.activePatient = this.patients[index]
	    }
	  }
	}
</script>

<style lang="css" scoped>
</style>
