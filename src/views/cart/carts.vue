<template>
  <div class="app-container">
    <div>Customers list !</div>
    <el-table
      :key="tableKey"
      v-loading="listLoading"
      :data="list"
      border
      fit
      highlight-current-row
      style="width: 100%;"
    >
      <el-table-column label="ID" prop="id" sortable="custom" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="First name" prop="fist_name" sortable="custom" align="center" width="240">
        <template slot-scope="{row}">
          <span>{{ row.custom.fist_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Date" prop="date" sortable="date">
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.size" name="pagination" @pagination="loadList"/>

  </div>
</template>

<script>
import CustomerServices from '@/service/CustomerServices'
import OrderSevice from '@/service/OrderSevice'
export default {
  name: 'Carts',
  data() {
    return {
      list: null,
      custom_id: null,
      listLoading: true,
      tableKey: 0,
      listQuery: {
        page: 1,
        size: 5,
        curentSize: 5,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  },
  methods: {
    getId() {
      this.custom_id = this.$route.params && this.$route.params.id
    },
    loadList() {
      if (this.custom_id !== null) {
        CustomerServices.getListOrder(this.custom_id, {
          page: this.listQuery.page,
          size: this.listQuery.size
        })
          .then(res => {
            this.list = res.data
          })
          .catch(e => {
            alert(e)
          })
      } else {
        OrderSevice.getAll({
          page: this.listQuery.page,
          size: this.listQuery.size
        })
          .then(res => {
            this.list = res.data
          })
          .catch(e => {
            alert(e)
          })
      }
    }
  }
}
</script>

<style scoped>

</style>
