<template>
  <div class="layout_side ps_f flex">
    <Side />
    <MiniSide />
  </div>
</template>

<script>
import Side from "./components/side";
import MiniSide from "./components/miniside";
export default {
  components: { Side, MiniSide },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
.layout_side {
  height: 100vh;
  background: pink;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 10;
  width: 160px;
}
</style>
