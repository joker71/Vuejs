<template>
  <div>
    product details !
    <span>{{ url_id }}</span>
  </div>
</template>

<script>

import DataService from '@/service/DataService'

export default {
  name: 'Details',
  data() {
    return {
      url_id: null,
      data: null
    }
  },
  created() {
    this.url_id = this.$route.params && this.$route.params.id
    DataService.getById(this.url_id)
      .then((res) => {
        this.data = res.data
        console.log(res.data)
      })
      .catch((e) => {
        alert(e)
      })
  }
}
</script>

<style scoped>

</style>
