<template>
  <div id="app">
    <div class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper">
        <av-navbar></av-navbar>
        <av-left-sidebar></av-left-sidebar>

        <div class="content-wrapper">
        	
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvNavbar from './components/AvNavbar.vue'
import AvLeftSidebar from './components/AvLeftSidebar.vue'

export default {
  components: { AvNavbar, AvLeftSidebar },
  name: 'app'
}

</script>

<style>

</style>
