<template>
  <div class="intro-x dropdown relative mr-auto sm:mr-6">
    <div class="dropdown-toggle notification notification--bullet cursor-pointer"> <vue-feather class="notification__icon" type="bell" @click="isShowNotification = !isShowNotification"></vue-feather> </div>
    <div class="notification-content dropdown-box mt-8 absolute top-0 left-0 sm:left-auto sm:right-0 z-20 -ml-10 sm:ml-0" :class="{'show': isShowNotification}">
        <div class="notification-content__box dropdown-box__content box">
            <div class="notification-content__title">Notifications</div>
            <div class="cursor-pointer relative flex items-center ">
                <div class="w-12 h-12 flex-none image-fit mr-1">
                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="~/assets/images/logo.svg">
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
                    <img alt="Midone Tailwind HTML Admin Template" class="rounded-full" src="~/assets/images/logo.svg">
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
        </div>
    </div>
</div>
</template>
<script>
export default {
  data() {
    return {
      isShowNotification: false,
    }
  },
}
</script>
