<template>
  <div
    class="layout_content ps_f ma_20 pad_15"
    :class="handleStyle ? '' : 'enlarger'"
  >
    <router-view></router-view>
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
.layout_content {
  bottom: 0;
  left: 280px;
  background: blueviolet;
  overflow: auto;
  transition: all 0.3s ease-in-out;
}

.enlarger {
  left: 0;
}
</style>
