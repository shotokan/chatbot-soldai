<template lang="pug">
  #app
    cb-header
    router-view
    cb-footer
</template>

<script>
import CbHeader from '@/components/layout/Header'
import CbFooter from '@/components/layout/Footer'

export default {
  name: 'app',
  components: { CbHeader, CbFooter },
  data () {
    return {
      msg: 'Bienvenidos al chatbot de Soldai'
    }
  }
}
</script>

<style lang="scss">
@import './scss/main.scss';
</style>
