<template>
  <div class="content">
    <h3>新闻详情页面</h3>
    <span class="news-id">当前新闻的ID:{{id}}</span>

    <div>
      <el-button @click="goBack">返回新闻列表</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "detail",
  layout:'dark',
  data () {
    return {
      id: 0,
      data: {
        title: '少儿编程或成第四大刚需基础教育，核桃编程解决师匮乏资及课程体系两大难题',
        description: '核桃编程受邀出席盛典，并凭借在编程教育领域杰出的科技创新成就，以及巨大的成长潜力荣膺“最具潜力创业企业”，成为科技风云榜历史唯一入选的少儿编程教育机构。'
      }
    }
  },
  head () {
    return {
      title: this.data.title,
      meta: [
        { hid: 'description', name: 'description', content: this.data.description },
      ],
    }
  },
  mounted () {
    this.id = this.$route.params.id
  },
  methods: {
    goBack () {
      this.$router.go(-1)
    }
  }
}
</script>

<style scoped>
  .news-id {
    margin: 10px;
    display: block;
  }

</style>
