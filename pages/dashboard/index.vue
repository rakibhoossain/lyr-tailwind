<template>
    <div class="flex">
        <!-- BEGIN: Side Menu -->
        <sidebar-menu/>
        <!-- END: Side Menu -->
        <!-- BEGIN: Content -->
        <div class="content">
          <top-content/>
          <!-- <top-content/> -->
        </div>
        <!-- END: Content -->
    </div>
</template>
<script>
import TopContent from '~/components/dashboard/TopContent.vue'
import SidebarMenu from '~/components/dashboard/SidebarMenu.vue'
export default {
  components: {
    TopContent,
    SidebarMenu
  },
}
</script>
