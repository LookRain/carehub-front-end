<template>
	<div>
		<header class="main-header">
    <!-- Logo -->
    <a href="index.html" class="logo" :style="styleObject">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>A</b>LT</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>Care</b>hub 
      <small>{{ groupName }}</small></span>

    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="offcanvas" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>

      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">

          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img v-if="userGroupRaw === 1" src="../assets/admin.jpg" class="user-image" alt="User Image">
          <img v-if="userGroupRaw === 2" src="../assets/hos_team.jpg" class="user-image" alt="User Image">
          <img v-if="userGroupRaw === 3" src="../assets/call_centre_team.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ user.DisplayedName }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img v-if="userGroupRaw === 1" src="../assets/admin.jpg" class="img-circle" alt="User Image">
          <img v-if="userGroupRaw === 2" src="../assets/hos_team.jpg" class="img-circle" alt="User Image">
          <img v-if="userGroupRaw === 3" src="../assets/call_centre_team.jpg" class="img-circle" alt="User Image">

                <p>
                  {{ user.DisplayedName }}
                </p>
              </li>

              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
               
                </div>
                <div class="pull-right">
                <mu-raised-button label="Sign Out" @click="signOut" primary></mu-raised-button>  
                </div>
              </li>
            </ul>
          </li>

        </ul>
      </div>
    </nav>
  </header>
	</div>
</template>

<script>
import { mapState } from 'vuex'

export default {
  name: 'av-navbar',
  data () {
    return {
    }
  },
  methods: {
    signOut() {
      sessionStorage.removeItem('accessToken')
      window.location.reload()
    }
  },
  computed: {
    userGroupRaw() {
      return this.$store.state.user.UserGroup
    },
    ...mapState([
        'user'
      ]),
    groupName() {
      switch(this.user.UserGroup) {
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
    },
    styleObject() {    
      if (this.user.UserGroup === 1) { return { backgroundColor: '#367fa9'} }
      if (this.user.UserGroup === 2) { return { backgroundColor: '#555299'} }
      if (this.user.UserGroup === 3) { return { backgroundColor: '#e08e0b'} }
      if (this.user.UserGroup === 4) { return { backgroundColor: '#ba0331'} }
      return { backgroundColor: '#367fa9'}
    }
  },
  created () {
  }
}
</script>

<style>
	
</style>
