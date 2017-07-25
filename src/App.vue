<template>
  <div>
    <div class="hold-transition skin-blue sidebar-mini">
      <div class="wrapper">
        <av-navbar></av-navbar>
        <av-left-sidebar v-if='user.UserGroup == 1'></av-left-sidebar>
        <av-hos-left-sidebar v-if='user.UserGroup == 2'></av-hos-left-sidebar>
        <av-call-left-sidebar v-if='user.UserGroup == 3'></av-call-left-sidebar>
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
  import AvHosLeftSidebar from './components/AvHosLeftSidebar.vue'
  import AvContent from './components/AvContent.vue'
  import AvFooter from './components/AvFooter.vue'
  import { mapState } from 'vuex'
  export default {
    components: { AvNavbar, AvLeftSidebar, AvCallLeftSidebar, AvHosLeftSidebar, AvContent, AvFooter },
    name: 'app',
    props: ['username'],
    data () {
      return {

      }
    },
    computed: {
      ...mapState([
        // map this.count to store.state.count
        'user'
      ])
    },
    created () {
      // Event.$on('1', () => { this.mode = 1 })
      // Event.$on('2', () => { this.mode = 2 })
      // Event.$on('3', () => { this.mode = 3 })
      // instance.get('usergroup').then((response)=>{console.log('group: ' + response.data)})
    },
    mounted() {
      if (this.$store.state.user.UserGroup === 3) {
          this.$router.push('call_tasks')
        }
        if (this.$store.state.user.UserGroup === 2) {
          this.$router.push('hospital_tasks')
        }
    }
  }

</script>

<style>

</style>
