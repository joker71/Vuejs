<template>
  <el-form>
    <el-form-item label="Name">
      <el-input v-model.trim="user.last_name"/>
    </el-form-item>
    <el-form-item label="Email">
      <el-input v-model.trim="user.email"/>
    </el-form-item>
    <div>
      <router-link to="'/customer/orders/' +${ customer_id}" class="link-type">
        <el-form-item>
          <el-button type="primary">Order</el-button>
        </el-form-item>
      </router-link>
    </div>
  </el-form>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      default: () => {
        return {
          customer_id: '',
          last_name: '',
          email: ''
        }
      }
    }
  },
  methods: {
    submit() {
      this.$message({
        message: 'User information has been updated successfully',
        type: 'success',
        duration: 5 * 1000
      })
    }
  }
}
</script>
