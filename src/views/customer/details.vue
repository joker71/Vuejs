<template>
  <div class="app-container">
    <div v-if="user">
      <el-row :gutter="20">

        <el-col :span="6" :xs="24">
          <user-card :user="user"/>
        </el-col>

        <el-col :span="18" :xs="24">
          <el-card>
            <el-tabs v-model="activeTab">
              <el-tab-pane label="Account" name="account">
                <account :user="user"/>
              </el-tab-pane>
              <el-tab-pane label="Address" name="address">
                <timeline :address="user.address"/>
              </el-tab-pane>
            </el-tabs>
          </el-card>
        </el-col>

      </el-row>
    </div>
  </div>
</template>

<script>
import CustomerServices from '@/service/CustomerServices'
import Account from '@/views/customer/components/Account'
import UserCard from '@/views/customer/components/UserCard'
import Timeline from '@/views/customer/components/Timeline'
export default {
  name: 'Details',
  components: { Timeline, UserCard, Account },
  data() {
    return {
      url_id: null,
      customer: null,
      user: null,
      activeTab: 'account',
      address: []
    }
  },
  mounted() {
    this.url_id = this.$route.params && this.$route.params.id
    CustomerServices.getById(this.url_id)
      .then(res => {
        this.user = res.data
      })
      .catch(e => {
        console.log(e)
        alert('Erorr: ' + e)
      })
  }
}
</script>

<style scoped>

</style>
