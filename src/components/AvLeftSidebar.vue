<template>
	 <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <av-sidebar-header></av-sidebar-header>
      
      <!-- /.search form -->
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
       



        <li>
          <router-link  to="/admin" exact>
            <i class="fa fa-th"></i> <span>Admin</span>
            <!-- <span class="pull-right-container"> -->
              <!-- <small class="label pull-right bg-green">new</small> -->
            <!-- </span> -->
          </router-link>
        </li>

        <!-- <li>
          <router-link  to="/admin_calendar" exact>
            <i class="fa fa-th"></i> <span>Calendar/History</span>
          </router-link>
        </li> -->

        <li>
          <router-link  to="/settings" exact>
            <i class="fa fa-th"></i> <span>Settings</span>

          </router-link>
        </li>

        <li>
          <router-link  to="/upload_protocol" exact>
            <i class="fa fa-th"></i> <span>Upload Protocol</span>

          </router-link>
        </li>

        <li>
          <router-link  to="/stats_summary" exact>
            <i class="fa fa-th"></i> <span>Statistics</span>

          </router-link>
        </li>

      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import AvSidebarHeader from './AvSidebarHeader'

export default {

  name: 'AvLeftbar',
  components: { AvSidebarHeader },

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
