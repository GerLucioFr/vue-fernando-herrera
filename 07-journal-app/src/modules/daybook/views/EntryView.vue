<template>
  <div class="entry-container px-4">
    <div class="row">
      <h4 class="col">July 14, 2023</h4>
      <button class="btn btn-sm btn-danger col-lg-2 mx-lg-1">
        <i class="fa fa-trash"></i>
        Delete
      </button>
      <button class="btn btn-sm btn-dark col-lg-2">
        <i class="fa fa-upload"></i>
        Photo
      </button>
    </div>

    <hr class="border border-danger border-1 opacity-50" />

    <div class="row pt-2">
      <textarea
        class="form-control"
        rows="8"
        placeholder="How was your day?"
      ></textarea>

      <img
        src="https://cdn.pixabay.com/photo/2015/12/01/20/28/forest-1072828_1280.jpg"
        alt="image"
        class="mt-4"
      />

      <button type="submit" class="btn btn-success mt-4">Save</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EntryView',
};
</script>

<style lang="scss" scoped>
img {
  height: 252px;
  padding: 0;

  border-radius: 8px;

  object-fit: cover;
}
</style>
