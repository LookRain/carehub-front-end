<template>
<div class="user-panel">
        <div class="pull-left image">
          <img src="../img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>{{username}}</p>

          <a href="#"><i class="fa fa-circle text-success"></i>{{ usergroup }}</a>
        </div>
      </div>
</template>
<script>
export default {
  name: 'AvSidebarHeader',
  data () {
    return {
    }
  },
  computed: {
  	username() {
  		return this.$store.state.user.DisplayedName
  	},
  	usergroup() {
  		switch(this.$store.state.user.UserGroup) {
  			case 1:
  				return 'Admin'
  				break;
  			case 2:
  				return 'Hospital Team'
  				break;
  			case 3:
  				return 'Call Centre Team'
  				break;
  			case 4:
  			  return 'Home Visit Team'
  			  break;
  			default:
  				return 'Team?'
  		}
  	}
  }
}
</script>
<style lang="css" scoped>
</style>