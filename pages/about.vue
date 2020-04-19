<template>
  <div class="content">
    关于我们
    <Visits/>
  </div>
</template>

<script>
import {mapGetters } from 'vuex'
import Visits from '../components/visits'

export default {
  name: "about",
  components: { Visits },
  computed: mapGetters({
    visits: 'getVisits'
  }),
  mounted () {
    console.log('visits:', this.visits)
  }
}
</script>

<style scoped>

</style>
