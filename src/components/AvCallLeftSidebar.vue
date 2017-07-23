<template>
   <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <av-sidebar-header></av-sidebar-header>
      

      <ul class="sidebar-menu">
        <li class="header">MAIN NAVIGATION</li>
       

        <li>
          <router-link  to="/call_tasks" exact>
            <i class="fa fa-th"></i> <span>Phone Calls To Make</span>
          </router-link>
        </li>

        <li>
          <router-link  to="/claim" exact>
            <i class="fa fa-th"></i> <span>Claim New</span>
          </router-link>
        </li>

        <li>
          <router-link  to="/call_history" exact>
            <i class="fa fa-th"></i> <span>Call History</span>
          </router-link>
        </li>

        <li>
          <router-link  to="/ad_hoc_call" exact>
            <i class="fa fa-th"></i> <span>ad hoc Call</span>
          </router-link>
        </li>

        <li>
          <router-link  to="/patients" exact>
            <i class="fa fa-th"></i> <span>Patients</span>
          </router-link>
        </li>

        <li>
          <router-link  to="/protocols" exact>
            <i class="fa fa-th"></i> <span>Protocols</span>

          </router-link>
        </li>

        <!-- <li>
          <router-link  to="/admin_calendar" exact>
            <i class="fa fa-th"></i> <span>Calendar/History</span>

          </router-link>
        </li> -->
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
import AvSidebarHeader from './AvSidebarHeader'
export default {

  name: 'AvCallLeftbar',
  components: { AvSidebarHeader },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
