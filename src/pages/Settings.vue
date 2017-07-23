<template>
	<div>
		<br>
		
		
		<div class="row">
			<section class="col-lg-12 col-xs-12">
				<div class="box box-success">
					<div class="box-header">
					<h3>Register for new user</h3>
					</div>
					<div class="box-body">
						<a href="/register.html" target="_blank">Click here</a>
					</div>
				</div>
			</section>


			<section class="col-lg-12 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Default Ward Assignment
						</h3>
					</div>
					<mu-dialog :open="dialog" title="Add New" @close="close">
						Input a new ward number and choose a staff
						<br>

						<mu-text-field label="New Ward Number" v-model="newWardNo" />
						<br>
						<mu-select-field label="Staff Assigned" v-model="newStaffEmail" :labelFocusClass="['label-foucs']" :maxHeight="500">
							<mu-menu-item v-for="user, index in hosUsers" :key="index" :value="user.Email" :title="user.DisplayName"/>
						</mu-select-field>

						<mu-flat-button slot="actions" @click="close" label="Close"/>
						<mu-flat-button slot="actions" primary @click="submit" label="Save"/>
					</mu-dialog>
					<div class="box-body">
						<mu-raised-button label="Create New" primary @click="open"></mu-raised-button>
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
				wardAssignment: [],
				dialog: false,
				newWardNo: '',
				newStaffEmail: ''
			}
		},
		methods: {
			updateWardAssignment(wardAssID, wardNo, username) {
				this.$put('wardassignment/' + wardAssID, {WardNo: wardNo, UserName: username}).then(response=> {
					alert('Update successfully! ' + 'User ' + response.data.UserName + ' assigned to ward ' + response.data.WardNo)
				})
			},
			open () {
				this.dialog = true
			},
			close () {
				this.dialog = false
			},
			submit () {
				if (!(this.newWardNo && this.newStaffEmail)) {
					alert('Please make sure you typed in both fields!')
					return
				} else {
					this.$post('wardassignment', {WardNo: this.newWardNo, UserName: this.newStaffEmail}).then(response=> {
						alert('Added successfully! ' + 'User ' + response.data.UserName + ' assigned to ward ' + response.data.WardNo)
					})
				}
				this.close()
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
