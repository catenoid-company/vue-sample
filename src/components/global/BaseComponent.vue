<template>
  <div id="container">
    <LeftMenuComponent />
    <div id="content">
      <HeaderComponent />
      <div id="main">
        <router-view />
      </div>
    </div>
    <ModalContainer />
  </div>
</template>

<script>
import HeaderComponent from '@/components/global/HeaderComponent'
import LeftMenuComponent from '@/components/global/LeftMenuComponent'
import ModalContainer from '@/components/global/ModalContainer'

export default {
  name: 'BaseComponent',
  components: { HeaderComponent, LeftMenuComponent, ModalContainer }
}
</script>
<style scoped>
#container {
  display: flex;
  width: 100vw;
  height: 100vh;
}
#main {
  width: calc(100vw - 64px);
  height: calc(100vh - 64px);
}
</style>
