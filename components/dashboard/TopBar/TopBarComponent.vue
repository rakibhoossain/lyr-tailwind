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
      <div class="intro-x dropdown relative mr-auto sm:mr-6">
          <div class="dropdown-toggle notification notification--bullet cursor-pointer"> <vue-feather class="notification__icon" type="bell"></vue-feather> </div>
          <div class="notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0">
              <div class="notification-content__box dropdown-box__content box">
                  <div class="notification-content__title">Notifications</div>
                  <div class="cursor-pointer relative flex items-center ">
                      <div class="w-12 h-12 flex-none image-fit mr-1">
                          <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-12.jpg">
                          <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                      </div>
                      <div class="ml-2 overflow-hidden">
                          <div class="flex items-center">
                              <a href="javascript:;" class="font-medium truncate mr-5">Johnny Depp</a>
                              <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                          </div>
                          <div class="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                      </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                      <div class="w-12 h-12 flex-none image-fit mr-1">
                          <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-4.jpg">
                          <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                      </div>
                      <div class="ml-2 overflow-hidden">
                          <div class="flex items-center">
                              <a href="javascript:;" class="font-medium truncate mr-5">Johnny Depp</a>
                              <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                          </div>
                          <div class="w-full truncate text-gray-600">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomi</div>
                      </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                      <div class="w-12 h-12 flex-none image-fit mr-1">
                          <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-8.jpg">
                          <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                      </div>
                      <div class="ml-2 overflow-hidden">
                          <div class="flex items-center">
                              <a href="javascript:;" class="font-medium truncate mr-5">Kate Winslet</a>
                              <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                          </div>
                          <div class="w-full truncate text-gray-600">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem </div>
                      </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                      <div class="w-12 h-12 flex-none image-fit mr-1">
                          <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="dist/images/profile-1.jpg">
                          <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                      </div>
                      <div class="ml-2 overflow-hidden">
                          <div class="flex items-center">
                              <a href="javascript:;" class="font-medium truncate mr-5">Brad Pitt</a>
                              <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">01:10 PM</div>
                          </div>
                          <div class="w-full truncate text-gray-600">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 20</div>
                      </div>
                  </div>
                  <div class="cursor-pointer relative flex items-center mt-5">
                      <div class="w-12 h-12 flex-none image-fit mr-1">
                          <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="~/assets/images/profile-2.jpg">
                          <div class="w-3 h-3 bg-theme-9 absolute right-0 bottom-0 rounded-full border-2 border-white"></div>
                      </div>
                      <div class="ml-2 overflow-hidden">
                          <div class="flex items-center">
                              <a href="javascript:;" class="font-medium truncate mr-5">Russell Crowe</a>
                              <div class="text-xs text-gray-500 ml-auto whitespace-no-wrap">06:05 AM</div>
                          </div>
                          <div class="w-full truncate text-gray-600">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry&#039;s standard dummy text ever since the 1500</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
      <!-- END: Notifications -->
      <!-- BEGIN: Account Menu -->
      <div class="intro-x dropdown w-8 h-8 relative">
          <div class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in">
              <img alt="Midone Tailwind HTML Admin Template" src="~/assets/images/profile-1.jpg">
          </div>
          <div class="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20">
              <div class="dropdown-box__content box bg-theme-38 text-white">
                  <div class="p-4 border-b border-theme-40">
                      <div class="font-medium">Johnny Depp</div>
                      <div class="text-xs text-theme-41">Backend Engineer</div>
                  </div>
                  <div class="p-2">
                      <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="user"></vue-feather> Profile </a>
                      <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="edit"></vue-feather> Add Account </a>
                      <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="lock"></vue-feather> Reset Password </a>
                      <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="help-circle"></vue-feather> Help </a>
                  </div>
                  <div class="p-2 border-t border-theme-40">
                      <a href="" class="flex items-center block p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="toggle-right"></vue-feather> Logout </a>
                  </div>
              </div>
          </div>
      </div>
      <!-- END: Account Menu -->
  </div>
  <!-- END: Top Bar -->
</template>
<script>
import SearchComponent from '~/components/dashboard/TopBar/Components/SearchComponent.vue'
import BreadcrumbComponent from '~/components/dashboard/TopBar/Components/BreadcrumbComponent.vue'
export default {
  components: { SearchComponent, BreadcrumbComponent },
  name: "top-bar-component",
}
</script>
