<template>
<section class="content-header">
      <h1>
        {{ primary }}
        <small>
        {{ secondary }}
        </small>
      </h1>
      <ol class="breadcrumb">
        <li><a href="#"><i class="fa fa-dashboard"></i> {{ primary }}</a></li>
        <li class="active">{{ secondary }}</li>
      </ol>
    </section>
</template>

<script>
export default {

  name: 'AvContentHeader',
  props: ['primary', 'secondary'],

  data () {
    return {

    }
  }
}
</script>

<style lang="css" scoped>
</style>
