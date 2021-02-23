<template>
  <div>
    <div class="container sm:px-10">
        <div class="block xl:grid grid-cols-2 gap-4">
            <!-- BEGIN: Login Info -->
            <div class="hidden xl:flex flex-col min-h-screen">
                <a href="" class="-intro-x flex items-center pt-5">
                    <img alt="Midone Laravel Admin Dashboard Starter Kit" class="w-6" src="~assets/images/logo.svg">
                    <span class="text-white text-lg ml-3">
                        Mid<span class="font-medium">one</span>
                    </span>
                </a>
                <div class="my-auto">
                    <img alt="Midone Laravel Admin Dashboard Starter Kit" class="-intro-x w-1/2 -mt-16" src="~assets/images/illustration.svg">
                    <div class="-intro-x text-white font-medium text-4xl leading-tight mt-10">A few more clicks to <br> sign in to your account.</div>
                    <div class="-intro-x mt-5 text-lg text-white">Manage all your e-commerce accounts in one place</div>
                </div>
            </div>
            <!-- END: Login Info -->
            <!-- BEGIN: Login Form -->
            <div class="h-screen xl:h-auto flex py-5 xl:py-0 my-10 xl:my-0">
                <div class="my-auto mx-auto xl:ml-20 bg-white xl:bg-transparent px-5 sm:px-8 py-8 xl:p-0 rounded-md shadow-md xl:shadow-none w-full sm:w-3/4 lg:w-2/4 xl:w-auto">
                    <h2 class="intro-x font-bold text-2xl xl:text-3xl text-center xl:text-left">Sign In</h2>
                    <div class="intro-x mt-2 text-gray-500 xl:hidden text-center">A few more clicks to sign in to your account. Manage all your e-commerce accounts in one place</div>
                    <div class="intro-x mt-8">
                        <form ref="loginForm">
                            <input type="text" v-model="login.email" :class="errors && errors.email ? 'is-danger' : ''" :rules="emailRules" label="E-mail" class="intro-x login__input input input--lg border border-gray-300 block" placeholder="Email">
                            <div v-if="errors && errors.email" class="input__error w-5/6 text-theme-6 mt-2">{{errors.email[0]}}</div>

                            <input v-model="login.password" :append-icon="showPassword?'mdi-eye':'mdi-eye-off'" :class="errors && errors.password ? 'is-danger' : ''" :rules="passwordRules" :type="showPassword ? 'text' : 'password'" class="intro-x login__input input input--lg border border-gray-300 block mt-4" placeholder="Password">
                            <div v-if="errors && errors.password" class="input__error w-5/6 text-theme-6 mt-2">{{errors.password[0]}}</div>
                        </form>
                    </div>
                    <div class="intro-x flex text-gray-700 text-xs sm:text-sm mt-4">
                        <div class="flex items-center mr-auto">
                            <input type="checkbox" v-model="rememberMe" class="input border mr-2">
                            <label class="cursor-pointer select-none" @click="rememberMe = !rememberMe">Remember me</label>
                        </div>
                        <a href="">Forgot Password?</a>
                    </div>
                    <div class="intro-x mt-5 xl:mt-8 xl:flex justify-center xl:justify-start">
                        <button :disabled="!valid" color="success" @click="userLogin" class="button button--lg w-full xl:w-32 text-white bg-theme-1 xl:mr-3" v-html="loginBtnText"></button>
                        <button class="button button--lg w-full xl:w-32 text-gray-700 border border-gray-300 mt-3 xl:mt-0">Sign up</button>
                    </div>
                    <div class="intro-x mt-10 xl:mt-24 text-gray-700 text-center xl:text-left">
                        By signin up, you agree to our <br> <a class="text-theme-1" href="">Terms and Conditions</a> & <a class="text-theme-1" href="">Privacy Policy</a>
                    </div>
                </div>
            </div>
            <!-- END: Login Form -->
        </div>
    </div>
  </div>
</template>
<script>
export default {
  layouts : 'intro',
  middleware: 'guest',
  data() {
    return {
      showPassword: false,
      rememberMe: false,
      valid: true,
      loginBtnText: 'Login',
      login: {
        email: '',
        password: ''
      },
      errors: null,
      emailRules: [
        v => !!v || "Required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ],
      passwordRules: [
        v => !!v || "Required.",
        v => (v && v.length >= 8) || "Min 8 characters"
      ]
    }
  },
  head() {
        return {
            bodyAttrs: {
                class: 'login'
            }
        }
  },
  computed: {
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    }
  },
  methods: {
    async userLogin() {
      this.loginBtnText = `<svg width="25" viewBox="-2 -2 42 42" xmlns="http://www.w3.org/2000/svg" stroke="white" class="w-5 h-5 mx-auto">
                        <g fill="none" fill-rule="evenodd">
                            <g transform="translate(1 1)" stroke-width="4">
                                <circle stroke-opacity=".5" cx="18" cy="18" r="18"/>
                                <path d="M36 18c0-9.94-8.06-18-18-18">
                                    <animateTransform
                                        attributeName="transform"
                                        type="rotate"
                                        from="0 18 18"
                                        to="360 18 18"
                                        dur="1s"
                                        repeatCount="indefinite"/>
                                </path>
                            </g>
                        </g>
                    </svg>`
      try {
        await this.$auth.loginWith('laravelJWT', { data: this.login })
        this.$router.push('/')
      } catch (err) {
        this.loginBtnText = `Login`
        console.log('Error response')
        console.log(err.response)
        if(err.response){
          // this.valid = false
          this.errors = err.response.data
        }
      }
    },
    validate() {
      if (this.$refs.loginForm.validate()) {
        // submit form to server/API here...
        this.valid = true
      }
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    }
  }
}
</script>
