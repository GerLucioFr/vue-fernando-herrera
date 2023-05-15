<template>
  <a v-if="isExternalLink" :href="link.to.url" target="_blank">{{
    link.name
  }}</a>
  <router-link v-else :to="link.to">
    <a>{{ link.name }}</a>
  </router-link>
</template>

<script>
export default {
  name: 'LinkComponent',
  computed: {
    isExternalLink() {
      return !!this.link?.to?.url;
    },
  },
  props: {
    link: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="scss">
.router-link-active a {
  font-weight: 700;
  color: rgb(2, 2, 2);
}

a {
  color: white;
  text-decoration: none;
}
</style>
