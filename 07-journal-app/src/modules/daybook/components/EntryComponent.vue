<template>
  <div
    class="text-truncate pointer"
    @click="$router.push({ name: 'entry', params: { id: 10 } })"
  >
    <h5 class="entry-title">Entry title</h5>
    <div class="title-description">
      <p>
        Ut est minim anim excepteur pariatur aute eiusmod enim commodo. Elit
        eiusmod dolore incididunt deserunt reprehenderit voluptate adipisicing
        excepteur laborum pariatur esse ex duis duis. Do nulla esse tempor quis
        qui qui cupidatat ullamco et cillum est nostrud magna. Sit commodo ad
        laborum incididunt ipsum. Quis culpa minim enim commodo irure do nisi ex
        adipisicing laborum aliqua. Deserunt in consectetur cupidatat irure
        excepteur adipisicing nostrud irure id tempor nisi ex sint amet. Enim
        sint cillum pariatur mollit sint officia cupidatat sit exercitation et
        dolor velit.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryComponent',
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
