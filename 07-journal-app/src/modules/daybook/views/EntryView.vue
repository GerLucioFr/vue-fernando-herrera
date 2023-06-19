<template>
  <div v-if="entry" class="entry-container px-4">
    <div class="row">
      <h4 class="col">{{ entry.date }}</h4>
      <button
        class="btn btn-sm btn-danger col-lg-2 mx-lg-1"
        v-if="entry.id"
        @click="onDeleteEntry"
      >
        <i class="fa fa-trash"></i>
        Delete
      </button>
      <button class="btn btn-sm btn-dark col-lg-2" @click="onInputClick">
        <i class="fa fa-upload"></i>
        Photo
      </button>
      <input
        type="file"
        name="photo"
        @change="onSelected"
        ref="imageSelector"
        v-show="false"
      />
    </div>

    <hr class="border border-danger border-1 opacity-50" />

    <div class="row pt-2">
      <textarea
        v-model="entry.text"
        class="form-control"
        rows="8"
        placeholder="How was your day?"
      ></textarea>

      <img
        v-if="localImage || entry.url"
        :src="localImage || entry.url"
        alt="image"
        class="mt-4"
      />

      <button
        type="submit"
        class="btn btn-success mt-4"
        @click="onSaveEntry"
        :disabled="isLoading"
      >
        <i class="fa fa-save"></i> Save
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';
export default {
  name: 'EntryView',
  created() {
    this.getCurrentEntry();
  },
  watch: {
    id() {
      this.getCurrentEntry();
    },
  },
  computed: {
    ...mapGetters('daybook', ['getEntryById']),
    ...mapState('daybook', ['isLoading']),
  },
  data() {
    return {
      entry: null,
      localImage: null,
      localFile: null,
    };
  },
  methods: {
    getCurrentEntry() {
      this.localFile = null;
      this.localImage = null;

      this.entry = this.getEntryById(this.id);
      if (!this.entry && this.id !== 'add') {
        this.$router.push({ name: 'no-entry' });
      }

      if (this.id === 'add') {
        this.entry = {
          date: new Date().toDateString(),
          text: '',
        };
      }
    },
    async onSaveEntry() {
      try {
        if (this.localFile) {
          const url = await this.uploadEntryImage({ file: this.localFile });
          this.entry.url = url;
        }

        if (this.entry.id) {
          this.updateEntry({ entry: this.entry });
        } else {
          const generatedEntry = await this.createEntry({ entry: this.entry });
          this.$router.push({
            name: 'entry',
            params: { id: generatedEntry.id },
          });
        }
      } catch (error) {
        console.error(error);
      }
    },

    async onDeleteEntry() {
      await this.deleteEntry({ entry: this.entry });
      this.$router.push({ name: 'no-entry' });
    },
    onSelected(event) {
      const image = event.target?.files[0];

      if (!image) {
        this.localImage = null;
        return;
      }
      this.localFile = image;

      const fileReader = new FileReader();
      fileReader.onload = () => (this.localImage = fileReader.result);
      fileReader.readAsDataURL(image);
    },
    onInputClick() {
      this.$refs.imageSelector?.click();
    },
    ...mapActions('daybook', [
      'updateEntry',
      'createEntry',
      'deleteEntry',
      'uploadEntryImage',
    ]),
  },
  props: {
    id: {
      type: String,
      required: true,
    },
  },
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
