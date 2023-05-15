<template>
  <div class="dragonball-navbar">
    <div class="dragonball-navbar-container">
      <LinkComponent v-for="item of links" :key="item.name" :link="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';
export default {
  components: {
    LinkComponent: defineAsyncComponent(() =>
      import('@/modules/shared/components/LinkComponent')
    ),
  },
  data() {
    return {
      links: [
        {
          to: { name: 'DragonballHome' },
          name: 'Home',
        },
        {
          to: { name: 'DragonballDetails', params: { id: 9 } },
          name: 'Details',
        },
        {
          to: { name: 'DragonballAbout' },
          name: 'About',
        },
        {
          to: { url: 'https://vuejs.org/' },
          name: 'Vue Docs',
        },
      ],
    };
  },
  name: 'DragonballNavbarComponent',
};
</script>

<style scoped lang="scss">
.dragonball-navbar {
  width: 100%;
  padding: 12px;

  background-color: rgb(0, 190, 57);
  color: white;

  &-container {
    display: flex;
    justify-content: space-around;
  }
}
</style>
