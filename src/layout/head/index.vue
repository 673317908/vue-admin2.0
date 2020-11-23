<template>
  <div class="layout_head ps_f pad_20" :class="handleStyle ? '' : 'hidden'">
    头部
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  components: {},
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
.layout_head {
  top: 0;
  right: -200px;
  background: white;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  width: 100%;
  z-index: 10;
  transition: all 0.3s ease-in-out;
}

.hidden {
  right: -40px;
}
</style>
