<template>
  <nav>
    <router-link :to="{ name: 'home' }">Home</router-link> |
    <router-link :to="{ name: 'about' }">About</router-link> |
    <router-link :to="{ name: 'counter' }">Counter</router-link> |
    <router-link :to="{ name: 'users' }">Users</router-link> |
    <router-link :to="{ name: 'search' }">Search Pokemon</router-link> |
    <router-link :to="{ name: 'todo' }">Todo</router-link> |
    <router-link :to="{ name: 'slots' }">Slots</router-link>
  </nav>
  <router-view v-slot="{ Component, route }">
    <keep-alive>
      <component :is="Component" :key="route.name" />
    </keep-alive>
  </router-view>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
