<template>
  <div
    class="text-truncate pointer"
    @click="$router.push({ name: 'entry', params: { id: entry.id } })"
  >
    <h5 class="entry-title">{{ entry.date }}</h5>
    <div class="title-description">
      <p>
        {{ entry.text }}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryComponent',
  props: {
    entry: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
h5 {
  margin: 0;
}

p {
  margin: 0;
}
</style>
