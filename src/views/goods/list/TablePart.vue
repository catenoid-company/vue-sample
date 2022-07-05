<template>
  <div>
    <div class="table-header">
      <div
        v-for="(item, index) of tableInfoList"
        :key="`header_${index}`"
        :style="{'width': item.width || '100%'}"
      >
        {{ item.name }}
      </div>
    </div>
    <div class="table-body">
      <div
        v-for="(item, index) of goodsList"
        :key="`body_${index}`"
        class="body-row"
      >
        <div
          v-for="(tItem, tIndex) of tableInfoList"
          :key="`body_${tIndex}`"
          class="body-col"
          :style="{'width': tItem.width || '100%', 'justify-content': tItem.align || 'center'}"
        >
          <div v-if="tItem.key === 'goodsImage'">
            <img class="goods-image" :src="item.goodsImage" alt="goodsImage">
          </div>
          <div
            v-else-if="tItem.key === 'goodsName'"
            class="goods-name"
            @click="onGoodsDetail(item.uniqueID)"
          >
            <div class="bold-text">
              {{ item.goodsName }}
            </div>
            <div class="sm-text">
              {{ item.goodsCode }}
            </div>
          </div>
          <div v-else>
            {{ item[tItem.key] }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <GoodsDetailModal
    v-if="isModalOpen"
    :goods-code="selectedCode"
    :is-open="isModalOpen"
    @modal-close="isModalOpen = false"
  />
</template>

<script>
import GoodsDetailModal from '@/views/modal/GoodsDetailModal'
import { mapState } from 'vuex'

export default {
  name: 'TablePart',
  components: { GoodsDetailModal },
  data () {
    return {
      isModalOpen: false,
      selectedCode: '',
      tableInfoList: [{
        key: 'goodsImage',
        name: '상품 이미지',
        width: '200px'
      }, {
        key: 'goodsName',
        name: '상품명 & 상품코드',
        align: 'left'
      }, {
        key: 'goodsPrice',
        name: '상품 가격',
        width: '300px'
      }, {
        key: 'companyName',
        name: '회사명',
        width: '200px'
      }, {
        key: 'createDate',
        name: '등록 일시',
        width: '300px'
      }]
    }
  },
  computed: {
    ...mapState('goodsStore', [
      'goodsList'
    ])
  },
  methods: {
    async onGoodsDetail (code) {
      this.selectedCode = code
      this.isModalOpen = true
    }
  }
}
</script>
<style scoped>
.table-header {
  display: flex;
  font-weight: 700;
  margin-bottom: 16px;
  background-color: #f5f7fb;
  padding: 16px 8px;
  border-radius: 8px;
  text-align: center;
}
.table-body {
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.body-row {
  display: flex;
  background-color: #FFFFFF;
  border-radius: 8px;
  padding: 16px 8px;
}
.body-col {
  display: flex;
  justify-content: center;
  align-items: center;
}
.goods-image {
  width: 100%;
  padding: 0 8px;
}
.goods-name {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}
.bold-text {
  font-weight: 700;
  font-size: 16px;
}
.sm-text {
  font-size: 12px;
}
</style>
