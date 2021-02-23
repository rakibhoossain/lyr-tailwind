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
