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
						<mu-stepper :activeStep="activeStep" :linear="true">


							<mu-step v-for="step, index in steps" :key="index">
								<mu-step-button @click="changeStep(index)">
									Step {{ index + 1 }}
								</mu-step-button>
							</mu-step>

						</mu-stepper>
						<div class="demo-step-content">
							<p>
								<ul>
									<li v-for="item in content">
									<!-- {{item.primary}} -->
									<mu-checkbox name="group" :nativeValue="item.primary" v-model="list" :label="item.primary" class="demo-checkbox"/> <br/>
    
									<ul v-show="item.secondary">
										<li v-for="subitem in item.secondary">
											{{subitem}}
										</li>
									</ul>
									</li>
								</ul>
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
		    	list: [],
		    	steps: [
		    		[
		    			{
		    				primary: 'Continuous or intermittent pain tightness, pressure, or discomfort accompanied by the following:',
		    				secondary: ['shortness of breath', 'dizziness or weakness', 'diaphoresis']
		    			},
		    			{
		    				primary: 'Chest pain persists, unrelieved by rest, pain medication (eg, analgesia, antacid) or nitroglycerin every 5 minutes (number of doses taken, spray or sublingual)'
		    			},
		    			{
		    				primary: 'Anginal chest pain at rest (eg, pale, diaphoresis, SOB, near syncope)'
		    			}
		    		],
		    		[
		    			{
		    				primary: 'Non anginal chest pain at rest'
		    			},
		    			{
		    				primary: 'Recent period of prolong sitting (such as travelling)'
		    			}
		    		]
		    	],
		      activeStep: 0
		    }
		  },
		  computed: {
		    content () {

		    	return this.steps[this.activeStep]
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
