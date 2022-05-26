<template>
  <div class="block">
    <el-timeline>
      <div class="m-3" v-for="(item,index) of address" :key="index"  placement="top">
        <el-card>
          <h4>{{ item.city }}</h4>
          <p>{{ item.streetNumber }}, {{ item.streetName }}</p>
        </el-card>
      </div>
    </el-timeline>
  </div>
</template>

<script>
export default {
  props: {
    address: {
      default: [
        {
          streetNumber: 54,
          streetName: 'Nguyễn Trãi',
          city: 'Hà Nội'
        }
      ],
      required: true
    }
  }
}
</script>
