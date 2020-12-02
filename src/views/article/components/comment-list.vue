<template>
  <van-list
    v-model="loading"
    :finished="finished"
    finished-text="Finished"
    :error="error"
    error-text="加载失败请重试"
    @load="onLoad"
  >
    <comment-item v-for="(item, index) in list" :key="index" :comment="item" />
  </van-list>
</template>

<script>
import { getComment } from '@/api/comment'
import CommentItem from './comment-item'
export default {
  name: 'CommentList',
  components: {
    CommentItem
  },
  props: {
    source: {
      type: [Number, String, Object],
      required: true
    }
  },
  data() {
    return {
      list: [],
      loading: false,
      finished: false,
      offset: null, // 获取下一页的标记
      limit: 10, // 页数
      error: false
    }
  },
  computed: {},
  watch: {},
  created() {
    this.onLoad()
  },
  mounted() {},
  methods: {
    async onLoad() {
      try {
        const { data } = await getComment({
          type: 'a', // 评论类型，a-对文章(article)的评论，c-对评论(comment)的回复
          source: this.source, // 源id，文章id或评论id
          offset: this.offset, // 获取评论数据的偏移量，值为评论id，表示从此id的数据向后取，不传表示从第一页开始读取数据
          limit: this.limit // 获取的评论数据个数，不传表示采用后端服务设定的默认每页数据量
        })
        // console.log(data)
        const { results } = data.data
        this.list.push(...results)
        this.$emit('onUpdta', data.data)
        this.loading = false
        if (results.length) {
          this.offset = data.data.last_id
        } else {
          this.finished = true
        }
      } catch (err) {
        this.error = true
        this.loading = false
      }
    }
  }
}
</script>
<style scoped lang="less"></style>
