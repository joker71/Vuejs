<template>
  <div class="app-container">
    <div>product list !</div>
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
          <span>{{ row.book_id }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Tên sách" prop="title" sortable="custom" align="center" width="360">
        <template slot-scope="{row}">
          <span>{{ row.title }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Phân loại" prop="catalogue" align="center" width="160">
        <template slot-scope="{row}">
          <span v-if = "row.catalogue !== null">{{ row.catalogue.catalogue_name }}</span>
          <span v-else>Chưa phân loại</span>
        </template>
      </el-table-column>
      <el-table-column label="Tác giả" prop="language" align="center" width="240">
        <template slot-scope="{row}">
          <span v-if="row.author !== null">{{ row.author.author_name }}</span>
          <span v-else>Chua Xac dinh</span>
        </template>
      </el-table-column>
      <el-table-column label="Giá" prop="price" sortable="price" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.price }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Kho" prop="stock" sortable="stock" align="center" width="80">
        <template slot-scope="{row}">
          <span>{{ row.stock }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Mã sản phẩm" prop="isbn13" align="center">
        <template slot-scope="{row}">
          <span>{{ row.isbn13 }}</span>
        </template>
      </el-table-column>
      <el-table-column label="Actions" prop="address" align="center">
        <div>
          <b-button variant="info" class="m-2">
            <b-icon icon="view-list" style="color: white" ></b-icon>
          </b-button>
          <b-button variant="success" class="m-2">
            <b-icon icon="pen" style="color: white" ></b-icon>
          </b-button>
          <b-button variant="danger" class="m-2">
            <b-icon icon="trash" style="color: white" ></b-icon>
          </b-button>
        </div>
      </el-table-column>
    </el-table>
    <pagination v-show="total>0" :total="total" :page.sync="listQuery.page" :limit.sync="listQuery.size" name="pagination" @pagination="loadPage"/>

  </div>
</template>

<script>
import DataService from '@/service/DataService'
import Pagination from '@/components/Pagination'

export default {
  components: { Pagination },
  name: 'Index',
  data() {
    return {
      list: null,
      listLoading: true,
      tableKey: 0,
      total: 0,
      listQuery: {
        page: 1,
        size: 5,
        importance: undefined,
        title: undefined,
        type: undefined,
        sort: '+id'
      }
    }
  },
  created() {
    this.loadPage()
  },
  methods: {
    loadPage() {
      DataService.getAll(
        {
          page: this.listQuery.page - 1,
          size: this.listQuery.size
        }
      ).then(
        (res) => {
          this.list = res.data['content']
          this.listLoading = false
          this.total = res.data['totalElements']
          console.log(this.list)
        }
      )
        .catch(
          (e) => {
            console.log(e)
          }
        )
    }
  }
}
</script>

<style scoped>

</style>
