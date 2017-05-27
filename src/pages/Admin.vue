<template>
	<div>
		<br>
		<div class="row">
			<div class="col-lg-6 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-aqua">
					<div class="inner">
						<h3>150</h3>

						<p>New Patients last week</p>
						<h3>Fancy Beautiful Chart</h3>
					</div>
					<div class="icon">
						<i class="ion ion-bag"></i>
					</div>
					<a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
				</div>
			</div>
			<!-- ./col -->
			<div class="col-lg-6 col-xs-6">
				<!-- small box -->
				<div class="small-box bg-green">
					<div class="inner">
						<h3>53</h3>

						<p>Discharged</p>
						<h3>Fancy Beautiful Chart</h3>
					</div>
					<div class="icon">
						<i class="ion ion-stats-bars"></i>
					</div>
					<a href="#" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
				</div>
			</div>
			<!-- ./col -->
		</div>

		<div class="row">
			<section class="col-lg-4 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Upload Excel
						</h3>
					</div>
					<div class="box-body">
						<div class="container">
							<mu-text-field hintText="Please upload excel or csv file"/><br/>
							<div class="excel-upload">
								<mu-raised-button label="Upload Excel" default onclick="document.getElementById('file').click();" />
								<input type="file" style="display:none;" id="file" name="file"/>
							</div>
							<br>
							<mu-divider/>
							<br>
							<router-link to="/assign_patient"><mu-raised-button label="Submit" primary/></router-link>
							
							
						</div>
						
						
					</div>
					<!-- /.box-body-->

				</div>
			</section>

			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-primary">
					<div class="box-header">


						

						<h3 class="box-title">
							Staff Workload
						</h3>
					</div>

					<div class="box-body">
						<mu-list>
							<mu-sub-header>Staff Workload</mu-sub-header>
							<mu-list-item title="Staff 1">
								<mu-avatar src="" slot="leftAvatar"/>

								<i class="fa fa-circle text-red" slot="right"><b>50</b></i>
							</mu-list-item>
							<mu-list-item title="Staff 2">
								<mu-avatar src="" slot="leftAvatar"/>
								<i class="fa fa-circle text-green" slot="right"><b>5</b></i>
							</mu-list-item>
						</mu-list>
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
	  name: 'Admin',

	  data () {
	    return {
	    }
	  },
	  methods: {
	  },
	  mounted () {
	    if (this.$root.panelMode === 3) {
	      this.$router.push('call_tasks')
	    }
	    if (this.$root.panelMode === 2) {
	      this.$router.push('hospital_tasks')
	    }
	  }
	}
</script>

<style lang="css" scoped>

</style>
