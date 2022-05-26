<template>
  <div>
    <span>{{ url_id }}</span>
    <form>
      <div class="form-group row">
        <label for="staticEmail" class="col-sm-2 col-form-label">Email</label>
        <div class="col-sm-10">
          <input type="text" readonly class="form-control-plaintext" id="staticEmail" value="email@example.com">
        </div>
      </div>
      <div class="form-group row">
        <label for="inputPassword" class="col-sm-2 col-form-label">Password</label>
        <div class="col-sm-10">
          <input type="password" class="form-control" id="inputPassword" placeholder="Password">
        </div>
      </div>
    </form>
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
  mounted() {
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
