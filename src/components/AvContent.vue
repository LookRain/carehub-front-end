<template>
	<section class="content">
		<av-content-header primary='Home' :secondary='this.$route.name'></av-content-header>
		<!-- /.content -->

		<router-view></router-view>
	</section>
	
</template>

<script>
	import AvContentHeader from '../components/AvContentHeader.vue'

	export default {
	  components: { AvContentHeader },
	  name: 'AvContent',

	  data () {
	    return {

	    }
	  }
	}
</script>

<style lang="css" scoped>
</style>
