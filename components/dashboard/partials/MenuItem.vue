<template>
  <li>
    <nuxt-link :to="node.page_name" class="side-menu">
      <div class="side-menu__icon"> <i :data-feather="node.icon"></i> </div>
      <div class="side-menu__title">{{node.title}}</div>
    </nuxt-link>
    <ul v-if="node.children && node.children.length">
      <menu-item v-for="child in node.children" :node="child" :key="child.id"></menu-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    node: Object,
  }
};
</script>
