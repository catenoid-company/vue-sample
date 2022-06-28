<template>
  <div class="container">
    <div class="content">
      <TablePart />
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import TablePart from '@/views/goods/list/TablePart'

export default {
  name: 'GoodsListPage',
  components: { TablePart },
  async created () {
    await this.requestGoodsList()
  },
  methods: {
    ...mapActions('goodsStore', [
      'requestGoodsList'
    ])
  }
}
</script>

<style scoped>
.container {
  position: relative;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #e7eff8;
}
.content {
  width: 90%;
  height: 90%;
  z-index: 2;
  padding: 24px;
}
</style>
