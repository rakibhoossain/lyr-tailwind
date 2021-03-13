<template>
    <div class="flex">
        <!-- BEGIN: Side Menu -->
        <sidebar-menu/>
        <!-- END: Side Menu -->
        <!-- BEGIN: Content -->
        <div class="content">
          <top-bar-component/>
          <!-- <top-content/> -->
        </div>
        <!-- END: Content -->
    </div>
</template>
<script>
import TopBarComponent from '~/components/dashboard/TopBar/TopBarComponent.vue'
import SidebarMenu from '~/components/dashboard/SidebarMenu.vue'
export default {
  middleware: 'auth',
  components: {
    TopBarComponent,
    SidebarMenu
  },
}
</script>
