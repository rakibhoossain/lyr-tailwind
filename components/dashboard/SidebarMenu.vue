<template>
  <nav class="side-nav">
    <a href="" class="intro-x flex items-center pl-5 pt-4">
      <img alt="Midone Tailwind HTML Admin Template" class="w-6" src="~/assets/images/logo.svg">
      <span class="hidden xl:block text-white text-lg ml-3"> Mid<span class="font-medium">one</span> </span>
    </a>
    <div class="side-nav__devider my-6"></div>
    <ul v-if="navData">
      <menu-item v-for="(item, i) in navData" :key="i" :node="item"></menu-item>
    </ul>
</nav>
</template>
<script>
import navData from '../../assets/js/nav-data'
import sidebarFunction from '../../assets/js/sideMenu'
import MenuItem from '~/components/dashboard/partials/MenuItem.vue'
export default {
  name: "sidebar-menu",
  components: {
    MenuItem
  },
  data(){
    return {navData}
  },
  mounted() {
    sidebarFunction()
  },
}
</script>
