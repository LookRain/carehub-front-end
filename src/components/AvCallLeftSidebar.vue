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
          <router-link  to="/patients" exact>
            <i class="fa fa-th"></i> <span>Patients</span>
          </router-link>
        </li>

        <li>
          <router-link  to="/protocols" exact>
            <i class="fa fa-th"></i> <span>Protocols</span>

          </router-link>
        </li>

        <li>
          <router-link  to="/admin_calendar" exact>
            <i class="fa fa-th"></i> <span>Calendar/History</span>

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
