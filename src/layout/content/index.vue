<template>
  <div class="layout_content ps_f ma_20 pad_15">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
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
</style>
