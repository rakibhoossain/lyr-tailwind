<template>
  <div v-if="users">
    <h1>User list: </h1>
    <ul>
      <li v-for="user in users" :key="user.id">{{ user.name }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  middleware: 'auth',
  layout: 'dashboard',
  data(){
    return {
      users: [],
      title: 'User list'
    }
  },
  head(){
    return {
      title: this.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: 'User list page description'
        }
      ]
    }
  },
  activated() {
      // Call fetch again if last fetch more than 30 sec ago
      if (this.$fetchState.timestamp <= Date.now() - 300) {
        this.$fetch()
      }
    },
  // async fetch(){
  //   const auth_token = this.$auth.strategy.token.get()
  //   this.users = await fetch('http://localhost/lyr-backend/public/api/users', {
  //     method: 'GET',
  //     headers : {
  //       Authorization : auth_token,
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json',
  //     }
  //   })
  //   .then(res => res.json())
  //   .then(result => result.users)
  // }
  async asyncData({$auth, $http}) {
    const users = await $http.$get(`http://localhost/lyr-backend/public/api/users`, {
      headers : {
        Authorization : $auth.strategy.token.get(),
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      }
    })
    return { users: users.users }
  },
}
</script>
