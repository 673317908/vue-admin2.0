<template>
  <div class="layout_side ps_f flex" :class="handleStyle ? '' : 'mini_hidden'">
    <Side />
    <MiniSide />
  </div>
</template>

<script>
import Side from "./components/side";
import MiniSide from "./components/miniside";
import { mapMutations, mapState } from "vuex";
export default {
  components: { Side, MiniSide },
  data() {
    return {};
  },
  computed: {
    ...mapState("layout", ["isMobile", "isTablet", "isDesktop", "isShow"]),
    handleStyle() {
      if (this.isTablet || this.isMobile) {
        this.handleIsShow(false);
      } else {
        this.handleIsShow(true);
      }
      return this.isShow;
    },
  },
  created() {},
  mounted() {},
  methods: {
    ...mapMutations("layout", ["handleIsShow"]),
  },
};
</script>

<style scoped lang="less">
.layout_side {
  height: 100vh;
  top: 0;
  left: 0;
  bottom: 0;
  width: 160px;
  transition: all 0.3s ease-in-out;
}

.mini_hidden {
  left: -160px;
  top: 140px;
}
</style>
