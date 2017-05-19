<template>
  <div id="app">
    <div class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper">
        <av-navbar></av-navbar>
        <av-left-sidebar></av-left-sidebar>

        <div class="content-wrapper">
        	<av-content-header></av-content-header>
        	<av-content></av-content>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import AvNavbar from './components/AvNavbar.vue'
import AvLeftSidebar from './components/AvLeftSidebar.vue'
import AvContentHeader from './components/AvContentHeader.vue'
import AvContent from './components/AvContent.vue'

export default {
  components: { AvNavbar, AvLeftSidebar, AvContentHeader, AvContent },
  name: 'app'
}

</script>

<style>

</style>
