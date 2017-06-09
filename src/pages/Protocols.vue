<template>
	<div>
		<div class="row">
			<section class="col-lg-4 col-xs-12 connectedSortable">
				<div class="box box-success">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Protocol List
						</h3>
					</div>
					<div class="box-body">

						
					</div>
					<!-- /.box-body-->

				</div>

				
			</section>

			<section class="col-lg-8 col-xs-12 connectedSortable">
				<div class="box box-warning">
					<div class="box-header">


						<i class="fa fa-map-marker"></i>

						<h3 class="box-title">
							Protocol Steps
						</h3>
					</div>
					<div class="box-body">
						<mu-stepper :activeStep="activeStep" :linear="false">
							<mu-step>
								<mu-step-button @click="changeStep(0)">
									Step 1
								</mu-step-button>
							</mu-step>
							<mu-step>
								<mu-step-button @click="changeStep(1)">
									Step 2
								</mu-step-button>
							</mu-step>
							<mu-step>
								<mu-step-button @click="changeStep(2)">
									Step 3
								</mu-step-button>
							</mu-step>
						</mu-stepper>
						<div class="demo-step-content">
							<p>
								{{content}}
							</p>
							<div>
								<mu-flat-button class="demo-step-button" label="上一步" :disabled="activeStep === 0" @click="handlePrev"/>
								<mu-raised-button class="demo-step-button" label="下一步" :disabled="activeStep >= 2" primary @click="handleNext"/>
								</div>
							</div>
						</div>
					</div>
				</section>

				
			</div>
		</div>
	</template>
	<script>
		export default {
		  data () {
		    return {
		      activeStep: 0
		    }
		  },
		  computed: {
		    content () {
		      let message = ''
		      switch (this.activeStep) {
		        case 0:
		          message = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia suscipit officia, in culpa natus tempore optio facilis? Soluta obcaecati vel cupiditate! Aliquam adipisci, quisquam necessitatibus laudantium maiores cupiditate dolorum totam.'
		          break
		        case 1:
		          message = 'Step 2'
		          break
		        case 2:
		          message = 'Step 3'
		          break
		        default:
		          message = 'fuck! 又 TM 出错了！！！'
		          break
		      }
		      return message
		    },
		    finished () {
		      return this.activeStep > 2
		    }
		  },
		  methods: {
		    handleNext () {
		      this.activeStep++
		    },
		    handlePrev () {
		      this.activeStep--
		    },
		    changeStep (index) {
		      this.activeStep = index
		    }
		  }
		}
	</script>
	<style lang="css" scoped>
	</style>
