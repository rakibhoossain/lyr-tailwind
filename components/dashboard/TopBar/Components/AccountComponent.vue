<template>
  <div class="intro-x dropdown w-8 h-8 relative focus:outline-none" @focusout="isShowAccount=false" tabindex="1">
    <div class="dropdown-toggle w-8 h-8 rounded-full overflow-hidden shadow-lg image-fit zoom-in" @click="isShowAccount = !isShowAccount">
        <img alt="User full name" src="~/assets/images/logo.svg">
    </div>
    <div class="dropdown-box mt-10 absolute w-56 top-0 right-0 z-20" :class="{'show' : isShowAccount}">
        <div class="dropdown-box__content box bg-theme-38 text-white">
            <div class="p-4 border-b border-theme-40">
                <div class="font-medium">{{$auth.user.name}}</div>
                <div class="text-xs text-theme-41">{{$auth.user.email}}</div>
            </div>
            <div class="p-2">
                <a href="" class="flex items-center p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="user"></vue-feather> Profile </a>
                <a href="" class="flex items-center p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="edit"></vue-feather> Add Account </a>
                <a href="" class="flex items-center p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="lock"></vue-feather> Reset Password </a>
                <a href="" class="flex items-center p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="help-circle"></vue-feather> Help </a>
            </div>
            <div class="p-2 border-t border-theme-40">
                <a href="" class="flex items-center p-2 transition duration-300 ease-in-out hover:bg-theme-1 rounded-md"> <vue-feather class="w-4 h-4 mr-2" type="toggle-right"></vue-feather> Logout </a>
            </div>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isShowAccount: false,
    }
  },
}
</script>
