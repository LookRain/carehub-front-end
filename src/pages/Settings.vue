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
								</mu-tr>
							</mu-thead>
							<mu-tbody>
								<mu-tr>
									<mu-td>12</mu-td>
									<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
								</mu-tr>
								<mu-tr>
									<mu-td>13</mu-td>
									<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
								</mu-tr>
								<mu-tr>
									<mu-td>14</mu-td>
									<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
								</mu-tr>
								<mu-tr>
									<mu-td>15</mu-td>
									<mu-td><mu-select-field v-model="game1" :labelFocusClass="['label-foucs']">
										<mu-menu-item v-for="text,index in list" :key="index" :value="index" :title="text" />
									</mu-select-field></mu-td>
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
				game1: 0,
				list: ['Staff 1', 'Staff 2', 'Staff 3', 'Staff 4', 'Staff 5', 'Staff 6']
			}
		},
		methods: {

		}
	}
</script>

<style lang="css" scoped>

</style>
