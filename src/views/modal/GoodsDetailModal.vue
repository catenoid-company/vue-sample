<template>
  <Teleport to="#modalContainer">
    <div
      v-if="isOpen"
      class="modal-background"
      @click="modalClose"
    >
      <div
        v-if="isDataReady"
        class="modal"
        style="width: 40vw"
      >
        <div class="modal-title">상품상세</div>
        <div style="display: flex; gap: 8px;">
          <div style="width: 50%">
            <img :src="goodsDetail.goodsImage" alt="image" style="width: 100%">
          </div>
          <div style="width: 50%; display: flex; flex-direction: column; gap: 16px;">
            <div class="goods-row">
              <div class="goods-info">
                <div>상품명</div>
                <div>{{ goodsDetail.goodsName }}</div>
              </div>
              <div class="goods-info">
                <div>상품 코드</div>
                <div>{{ goodsDetail.goodsCode }}</div>
              </div>
            </div>
            <div class="goods-row">
              <div class="goods-info">
                <div>상품 가격</div>
                <div>{{ goodsDetail.goodsPrice }}</div>
              </div>
              <div class="goods-info">
                <div>등록 일시</div>
                <div>{{ goodsDetail.createDate }}</div>
              </div>
            </div>
            <div class="goods-row">
              <div class="goods-info">
                <div>Link</div>
                <div>{{ goodsDetail.pcLink }}</div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: flex; justify-content: right;">
          <button @click="modalClose">Close</button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'GoodsDetailModal',
  props: {
    goodsCode: {
      type: [Number, String],
      required: true
    },
    isOpen: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      isDataReady: false
    }
  },
  computed: {
    ...mapState('goodsStore', [
      'goodsDetail'
    ])
  },
  emits: ['modal-close'],
  async created () {
    await this.requestGoodsDetail(this.goodsCode)
    this.isDataReady = true
  },
  methods: {
    ...mapActions('goodsStore', [
      'requestGoodsDetail'
    ]),
    modalClose () {
      this.$emit('modal-close')
    }
  }
}
</script>
<style scoped>
.goods-row {
  display: flex;
  width: 100%;
}
.goods-info {
  width: 100%;
}
.goods-info div:nth-child(1) {
  font-weight: bold;
}
</style>
