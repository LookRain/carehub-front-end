<template>
<div class="user-panel">
        <div class="pull-left image">
          <img v-if="userGroupRaw === 1" src="../assets/admin.jpg" class="img-circle" alt="User Image">
          <img v-if="userGroupRaw === 2" src="../assets/hos_team.jpg" class="img-circle" alt="User Image">
          <img v-if="userGroupRaw === 3" src="../assets/call_centre_team.jpg" class="img-circle" alt="User Image">

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
    userGroupRaw() {
      return this.$store.state.user.UserGroup
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