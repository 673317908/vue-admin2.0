<template>
  <div>
    <LayoutHead />
    <LayoutSide />
    <LayoutContent />
  </div>
</template>

<script>
import LayoutHead from "./head/index";
import LayoutSide from "./side/index";
import LayoutContent from "./content/index";
export default {
  components: {
    LayoutHead,
    LayoutSide,
    LayoutContent
  },
  data() {
    return {};
  },
  created() {},
  mounted() {},
  methods: {},
};
</script>

<style scoped lang="less">
</style>
