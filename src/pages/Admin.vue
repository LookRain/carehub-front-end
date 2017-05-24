<template>
<div>
	<av-content-header primary='Home' secondary='Admin'></av-content-header>
	<img src="../img/avatar.png" alt="">
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
  }
}
</script>

<style lang="css" scoped>
</style>
