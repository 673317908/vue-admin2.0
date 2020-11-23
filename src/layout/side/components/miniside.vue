<template>
  <div class="layout_mini_side ps_f" :class="handleStyle ? '' : 'hidden'">
    <ul>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
      <li>1</li>
    </ul>
  </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";
import router from "../../../router/index";
export default {
  components: {},
  data() {
    return {
      length: 0,
    };
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
  mounted() {
    this.menuData = router.options.routes;
  },
  methods: {
    ...mapMutations("layout", ["handleIsShow"]),
  },
};
</script>

<style scoped lang="less">
.layout_mini_side {
  width: 120px;
  background: white;
  box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);
  height: 100%;
  transition: all 0.3s ease-in-out;
  left: 160px;
  top: 60px;
  z-index: 9;
}

.hidden {
  left: -280px;
  top: 80px;
}
</style>
