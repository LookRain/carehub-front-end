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
          <router-link  to="/hospital_tasks" exact>
            <i class="fa fa-th"></i> <span>Patients To Attend To</span>
          </router-link>
        </li>

       

        <li>
          <router-link  to="/patients" exact>
            <i class="fa fa-th"></i> <span>Patients</span>
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

  name: 'AvHosLeftbar',
  components: { AvSidebarHeader },
  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
