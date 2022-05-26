<!--"customer_id": 12,-->
<!--"fist_name": "Filmer",-->
<!--"last_name": "Douse",-->
<!--"email": "fdouseb@foxnews.com",-->
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
          <span>{{ row.customer_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="First name" prop="fist_name" sortable="custom" align="center" width="240">
        <template slot-scope="{row}">
          <span>{{ row.fist_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Last name" prop="last_name" align="center" width="240">
        <template slot-scope="{row}">
          <span>{{ row.last_name }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Email" prop="email" align="center" width="320">
        <template slot-scope="{row}">
          <span >{{ row.email }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Address" prop="address" align="center" width="400">
        <template slot-scope="{row}">
          <span >{{ row.address[0].streetNumber }}, {{ row.address[0].streetName }}, {{ row.address[0].city }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" prop="address" align="center">
        <div>
          <b-button variant="info" class="m-2">
            <b-icon icon="view-list" style="color: white" ></b-icon>
          </b-button>
          <b-button variant="success" class="m-2">
            <b-icon icon="cart3" style="color: white" ></b-icon>
          </b-button>
        </div>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.size" name="pagination" @pagination="loadList"/>

  </div>
</template>

<script>
import CustomerServices from '@/service/CustomerServices'
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  name: 'Customers',
  data() {
    return {
      list: null,
      listLoading: true,
      tableKey: 0,
      total: 0,
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
    loadList() {
      CustomerServices.getAll({
        page: this.listQuery.page - 1,
        size: this.listQuery.size
      })
        .then(res => {
          this.list = res.data['content']
          this.listLoading = false
          this.total = res.data['totalElements']
        })
        .catch(e => {
          console.log(e)
          alert('Error:' + e)
        })
    }
  },
  created() {
    this.loadList()
  }
}
</script>

<style scoped>

</style>
