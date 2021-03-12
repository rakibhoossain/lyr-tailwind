<template>
  <!-- BEGIN: Top Bar -->
  <div class="top-bar">
      <!-- BEGIN: Breadcrumb -->
      <breadcrumb-component/>
      <!-- END: Breadcrumb -->
      <!-- BEGIN: Search -->
      <search-component/>
      <!-- END: Search -->
      <!-- BEGIN: Notifications -->
      <notification-component/>
      <!-- END: Notifications -->
      <!-- BEGIN: Account Menu -->
      <account-component/>
      <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>
<script>
import SearchComponent from '~/components/dashboard/TopBar/Components/SearchComponent.vue'
import BreadcrumbComponent from '~/components/dashboard/TopBar/Components/BreadcrumbComponent.vue'
import NotificationComponent from '~/components/dashboard/TopBar/Components/NotificationComponent.vue'
import AccountComponent from '~/components/dashboard/TopBar/Components/AccountComponent.vue'
export default {
  components: { SearchComponent, BreadcrumbComponent, NotificationComponent, AccountComponent},
  name: "top-bar-component",
}
</script>
