<template>
	<div>
		<br>
		

		<div class="row">
			<section class="col-lg-12 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Default Ward Assignment
						</h3>
					</div>
					<div class="box-body">

						<mu-table :showCheckbox="false">
							<mu-thead>
								<mu-tr>
									<mu-th>Ward</mu-th>
									<mu-th>Staff Assigned</mu-th>
									<mu-th>Action</mu-th>
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr v-for="assignment in wardAssignment" :key="assignment.WAssignmentId">
									<mu-td>{{ assignment.WardNo }}</mu-td>
									<mu-td>
									<mu-select-field v-model="assignment.UserName" :labelFocusClass="['label-foucs']" :maxHeight="500">
                    <mu-menu-item v-for="user, index in hosUsers" :key="index" :value="user.Email" :title="user.DisplayName"/>
                  </mu-select-field>
                  </mu-td>
                  <mu-td><mu-raised-button label="Update" secondary @click="updateWardAssignment(assignment.WAssignmentId, assignment.WardNo, assignment.UserName)"></mu-raised-button></mu-td>

								</mu-tr>

							</mu-tbody>
						</mu-table>	
					</div>
					<!-- /.box-body-->

				</div>

				<div class="box box-warning">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Settings
						</h3>
					</div>
					<div class="box-body">
						Other settings...
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
						<br>
					</div>
				</div>
			</section>

			
		</div>

	</div>
</template>

<script>
	import AvContentHeader from '../components/AvContentHeader.vue'

	export default {
	  components: { AvContentHeader },
	  name: 'Settings',

	  data () {
	    return {
	      wardAssignment: []
	    }
	  },
	  methods: {
	  	updateWardAssignment(wardAssID, wardNo, username) {
	  		this.$put('wardassignment/' + wardAssID, {WardNo: wardNo, UserName: username}).then(response=> {
          alert('Update successfully! ' + 'User ' + response.data.UserName + ' assigned to ward ' + response.data.WardNo)
        })
	  	}
	  },
	  computed: {
	  	hosUsers() {
        return this.$store.state.allHosUsers
      }
	  },
	  created() {
	  	this.$get('wardassignment').then(response => {
	  		this.wardAssignment = response.data
	  	})
	  }
	}
</script>

<style lang="css" scoped>

</style>
