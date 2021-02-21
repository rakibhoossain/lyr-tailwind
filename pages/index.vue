<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        lyr-tailwind
      </h1>
      <div class="links">
        <a
          href="https://nuxtjs.org/"
          target="_blank"
          rel="noopener noreferrer"
          class="button--green"
        >
          Documentation
        </a>
        <div class="badge">Hello</div>
        <a
          href="https://github.com/nuxt/nuxt.js"
          target="_blank"
          rel="noopener noreferrer"
          class="button--grey"
        >
          GitHub
        </a>
        <pre>{{tailwindConfig}}</pre>
        <div class="test">
          <span>A</span>
          <span>B</span>
          <span>C</span>
          <span>D</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import tailwindConfig from '~tailwind.config'
export default {
  data () {
    return { tailwindConfig }
  }
}
</script>
<style lang="sass">
.badge
  width: $sm
  @apply inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700
  &:hover
    @apply bg-gray-300

.banner
  @apply bg-indigo-900 text-center py-4
  @screen lg
    @apply bg-yellow-500
  &:hover
    @apply bg-indigo-800
    @screen lg
      @apply bg-yellow-600


.test
  @for $i from 1 through 5
    &>span:nth-child(#{$i})
      color: red
  color: green
</style>
