<template>
  <li>
    <nuxt-link :to="node.page_name" class="side-menu">
      <div class="side-menu__icon"> <vue-feather v-if="node.icon" :type="node.icon"></vue-feather> </div>
      <div class="side-menu__title">{{node.title}} <vue-feather v-if="node.children && node.children.length" class="side-menu__sub-icon" type="chevron-down"></vue-feather></div>
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
