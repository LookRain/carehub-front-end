<template>
	 <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <av-sidebar-header></av-sidebar-header>
      <!-- search form -->
      <form action="#" method="get" class="sidebar-form">
        <div class="input-group">
          <input type="text" name="q" class="form-control" placeholder="Search...">
              <span class="input-group-btn">
                <button type="submit" name="search" id="search-btn" class="btn btn-flat"><i class="fa fa-search"></i>
                </button>
              </span>
        </div>
      </form>
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

        <li>
          <router-link  to="/admin_calendar" exact>
            <i class="fa fa-th"></i> <span>Calendar/History</span>
            <!-- <span class="pull-right-container"> -->
              <!-- <small class="label pull-right bg-green">new</small> -->
            <!-- </span> -->
          </router-link>
        </li>

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


        <li class="header">LABELS</li>
        <li><a href="#"><i class="fa fa-circle-o text-red"></i> <span>Important</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-yellow"></i> <span>Warning</span></a></li>
        <li><a href="#"><i class="fa fa-circle-o text-aqua"></i> <span>Information</span></a></li>
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
