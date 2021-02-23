<template>
  <div>
    <Nuxt />
  </div>
</template>
<style lang="sass">
html
  background: #1C3FAA
body
  -webkit-font-smoothing: antialiased
  @apply overflow-x-hidden py-3 px-8 font-roboto text-sm text-gray-800
  @media (max-width: $sm)
    @apply px-3
  .content
    border-radius: 30px
    padding: 0px 22px
    min-height: 100vh
    --bg-opacity: 1
    background-color: #F1F5F8
    background-color: rgba(241, 245, 248, var(--bg-opacity))
    flex: 1 1 0%
    padding-bottom: 2.5rem
</style>
