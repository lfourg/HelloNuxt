<template>
  <div class="content">
    <h3>新闻中心</h3>
    <ul>
      <li v-for="item in data">
        <NLink :to="`/news/detail/${item.id}`">{{item.name}}</NLink>
      </li>
    </ul>
    <el-pagination class="page"
      background
      @current-change="handleCurrentChange"
      :current-page="page.pageNum"
      :page-size="page.pageSize"
      layout="prev, pager, next"
      :total="page.total">
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "news",
  asyncData ({ params, error }) {
    return axios.get(`https://api.hetao101.com/official-cms/v1/reports/all?pageSize=10&pageNum=${params.id || 1}`).then(res => {
      return {
        data: res.data.data.reports,
        page: {
          total: res.data.data.total,
          pageNum: res.data.data.page_num,
          pageSize: res.data.data.page_size
        }
      }
    })
  },
  methods: {
    handleCurrentChange (_pageNum) {
      this.$router.push(`/news/${_pageNum}`)
    }
  }
}
</script>

<style scoped lang="scss">
  ul {
    li {
      margin-top: 10px;
    }
  }
  .page{
    margin-top:20px;
  }
</style>
