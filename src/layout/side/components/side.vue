<template>
  <div class="layout_side_mini">
    <div class="layout_side_title">后台管理系统</div>
    <div class="layout_side_list">
      <div
        class="layout_side_item"
        v-for="(item, index) in menuData"
        :key="index"
      >
        <i></i><span>{{ item.title }}</span>
      </div>
    </div>
  </div>
</template>

<script>
import router from "../../../router/index";
export default {
  components: {},
  data() {
    return {
      menuData: [],
    };
  },
  created() {},
  mounted() {
    this.menuData = router.options.routes;
  },
  methods: {},
};
</script>

<style scoped lang="less">
.layout_side_mini {
  background: #1c2325;
  width: 160px;
  transition: all 0.3s ease-in-out;
  z-index: 10;
}

.layout_side_title {
  color: white;
  text-align: center;
  padding: 20px;
  font-weight: 700;
  font-size: 18px;
}

.layout_side_item {
  padding: 10px;
  color: white;
  font-size: 16px;
  text-align: center;
  user-select: none;
  cursor: pointer;
}
</style>
