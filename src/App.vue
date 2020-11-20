<template>
  <div id="app">
    <router-view />
  </div>
</template>
 <script>
import { mapMutations } from "vuex";
import Setting from "./setting";
export default {
  mounted() {
    window.addEventListener("resize", this.getWindowSize);
    this.getWindowSize();
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.getWindowSize);
  },
  methods: {
    ...mapMutations("layout", ["handleSize", "handleType"]),
    // 获取屏幕尺寸
    getWindowSize() {
      const size = {
        width: window.innerWidth,
        height: window.innerHeight,
      };
      this.handleSize(size);
      this.setDeviceType(size);
    },
    // 设置设备
    setDeviceType({ width }) {
      let type = "";
      if (width >= Setting.setDeviceSize.Desktop) {
        type = "Desktop";
      } else if (width >= Setting.setDeviceSize.Tablet) {
        type = "Tablet";
      } else if (width >= Setting.setDeviceSize.Mobile) {
        type = "Mobile";
      }
      this.handleType(type);
    },
  },
  computed: {},
};
</script>
<style lang="less">
</style>
