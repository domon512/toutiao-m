<template>
  <div class="search-suggestion">
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
    <van-cell title="黑马程序员..." icon="search"></van-cell>
  </div>
</template>

<script>
export default {
  name: 'SearchSuggestion',
  components: {},
  props: {
    searchText: {
      type: String,
      required: true
    }
  },
  data() {
    return {}
  },
  computed: {},
  watch: {
    searchText: {
      // 当searchText发生改变会触发handler 注意handler 是固定的
      handler(value) {
        console.log(value)
      },
      immediate: true // 该回调将会在侦听开始之后被立即调用
    }
  },
  created() {},
  mounted() {},
  methods: {
    loadSearchSuggestions() {
      try {
      } catch (err) {
        this.$toast('数据获取失败，请稍后重试')
      }
    }
  }
}
</script>

<style scoped lang="less"></style>
