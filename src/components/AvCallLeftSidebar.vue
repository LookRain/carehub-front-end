<template>
   <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image">
          <img src="../img/user2-160x160.jpg" class="img-circle" alt="User Image">
        </div>
        <div class="pull-left info">
          <p>Call Centre Staff</p>
          <a href="#"><i class="fa fa-circle text-success"></i> Online</a>
        </div>
      </div>
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
          <router-link  to="/call_tasks" exact>
            <i class="fa fa-th"></i> <span>Phone Calls To Make</span>
            <!-- <span class="pull-right-container"> -->
              <!-- <small class="label pull-right bg-green">new</small> -->
            <!-- </span> -->
          </router-link>
        </li>

        <li>
          <router-link  to="/claim" exact>
            <i class="fa fa-th"></i> <span>Claim New</span>
            <!-- <span class="pull-right-container"> -->
              <!-- <small class="label pull-right bg-green">new</small> -->
            <!-- </span> -->
          </router-link>
        </li>

        <li>
          <router-link  to="/patients" exact>
            <i class="fa fa-th"></i> <span>Patients</span>
            <!-- <span class="pull-right-container"> -->
              <!-- <small class="label pull-right bg-green">new</small> -->
            <!-- </span> -->
          </router-link>
        </li>

        <li>
          <router-link  to="/protocols" exact>
            <i class="fa fa-th"></i> <span>Protocols</span>
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
            <!-- <span class="pull-right-container"> -->
              <!-- <small class="label pull-right bg-green">new</small> -->
            <!-- </span> -->
          </router-link>
        </li>


       <!--  <li class="active treeview">
          <a href="#">
            <i class="fa fa-dashboard"></i> <span>Dashboard</span>
            <span class="pull-right-container">
              <i class="fa fa-angle-left pull-right"></i>
            </span>
          </a>
          <ul class="treeview-menu">
            <li class="active"><a href="index.html"><i class="fa fa-circle-o"></i> Dashboard v1</a></li>
            <li><a href="index2.html"><i class="fa fa-circle-o"></i> Dashboard v2</a></li>
            <li><a href="index2.html"><i class="fa fa-circle-o"></i> test</a></li>
            
          </ul>
        </li> -->
        
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
export default {

  name: 'AvCallLeftbar',

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
