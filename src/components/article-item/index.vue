<template>
  <!-- <div  class="article-item> 666666</div> -->
  <van-cell class="article-item">
    <div slot="title" class="title">{{ article.title }}</div>
    <div slot="lable">
      <div v-if="article.cover.type === 3" class="cover-wrap">
        <div
          class="cover_item"
          v-for="(img, index) in acticle.cover.images"
          :key="index"
        >
          <van-image width="200" height="100" :src="img" />
        </div>
      </div>
      <div>
        <span>{{ article.aut_name }}</span>
        <span>{{ article.comm_count }}评论</span>
        <span>{{ article.pubdate }}</span>
      </div>
    </div>
    <van-image
      slot="default"
      v-if="article.cover.type === 1"
      width="100"
      height="100"
      :src="acticle.cover.images[0]"
    />
  </van-cell>
</template>

<script>
export default {
  name: 'ArticleItem',
  props: {
    article: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped lang="less"></style>
