<template>
  <li>
    <a v-if="hasChildren" :href="node.page_name" class="side-menu" :class="{'side-menu--open' : isActiveSubMenu}" @click.prevent="toggleChild">
      <div class="side-menu__icon"> <vue-feather v-if="node.icon" :type="node.icon"></vue-feather> </div>
      <div class="side-menu__title">{{node.title}} <vue-feather v-if="hasChildren" class="side-menu__sub-icon" :class="{'transform rotate-180': isActiveSubMenu}" type="chevron-down"></vue-feather></div>
    </a>
    <nuxt-link v-else :to="node.page_name" class="side-menu">
      <div class="side-menu__icon"> <vue-feather v-if="node.icon" :type="node.icon"></vue-feather> </div>
      <div class="side-menu__title">{{node.title}}</div>
    </nuxt-link>
    <ul v-if="children && children.length" class="side-menu__sub-open">
      <menu-item v-for="child in children" :node="child" :key="child.id"></menu-item>
    </ul>
  </li>
</template>

<script>
export default {
  name: "menu-item",
  props: {
    node: Object
  },
  data() {
    return {
      children: null,
      isActiveSubMenu: false,
    }
  },
  methods: {
    toggleChild(){
      if(this.isActiveSubMenu){
        this.children = null
        this.isActiveSubMenu = false
      }else if(this.hasChildren){
        this.children = this.node.children
        this.isActiveSubMenu = true
      }
    }
  },
  computed: {
    hasChildren(){
      return (this.node.children && this.node.children.length)? true : false
    }
  },
};
</script>
