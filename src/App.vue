<template>
  <div id="app">
    <div class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper">
        <av-navbar></av-navbar>
        <av-left-sidebar v-if='mode == 1'></av-left-sidebar>
        <av-call-left-sidebar v-if='mode == 3'></av-call-left-sidebar>
        <!-- <av-left-sidebar-call v-if='mode == 3'></av-left-sidebar> -->
        <div class="content-wrapper">

        	<av-content></av-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvNavbar from './components/AvNavbar.vue'
import AvLeftSidebar from './components/AvLeftSidebar.vue'
import AvCallLeftSidebar from './components/AvCallLeftSidebar.vue'
import AvContent from './components/AvContent.vue'
import AvFooter from './components/AvFooter.vue'

export default {
  components: { AvNavbar, AvLeftSidebar, 'av-call-left-sidebar': AvCallLeftSidebar, AvContent, AvFooter },
  name: 'app',
  data () {
    return {
      mode: 1 // 1: admin, 2: hospital, 3: call
    }
  }
}

</script>

<style>

</style>
