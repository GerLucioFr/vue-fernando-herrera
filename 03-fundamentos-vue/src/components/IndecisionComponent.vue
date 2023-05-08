<template>
  <div class="indecision-container">
    <img
      :src="
        questionAnswer.image ||
        'https://w.wallhaven.cc/full/96/wallhaven-966re1.jpg'
      "
      alt="background"
    />
    <div class="indecision-form">
      <input
        type="text"
        id="question"
        v-model="question"
        :disabled="isLoading"
        placeholder="Ask me anything?"
      />
      <p>Remember to use a question mark at the end</p>

      <div class="question">
        <h2>{{ question || 'Your question goes here' }}</h2>

        <h1 v-if="isLoading">Loading your answer :)</h1>
        <h1 v-if="!isLoading && questionAnswer.answer">
          {{ questionAnswer.answer }}
        </h1>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';
export default {
  name: 'IndecisionComponent',
  data() {
    return {
      question: '',
      isLoading: false,
      questionAnswer: {
        answer: '',
        forced: false,
        image: '',
      },
    };
  },
  watch: {
    question(value) {
      if (!value.includes('?')) {
        this.resetAnswer();
        return;
      }
      this.getAnswer();
    },
  },
  methods: {
    async getAnswer() {
      const baseURL = 'https://yesno.wtf/api';
      const axiosInstance = axios.create({
        baseURL,
      });

      this.isLoading = true;
      try {
        const { data } = await axiosInstance.get();

        this.questionAnswer = data;
        this.isLoading = false;
      } catch (error) {
        this.isLoading = false;
        this.resetAnswer();
        console.error(error);
      }
    },
    resetAnswer() {
      this.questionAnswer = {
        answer: '',
        forced: false,
        image: '',
      };
    },
  },
};
</script>
<style scoped>
.indecision-container {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  height: 100vh;
}

img {
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
  object-fit: cover;

  opacity: 0.5;

  z-index: 1;
}

.indecision-form {
  position: relative;

  margin: 32px 0;

  z-index: 2;
}

input[type='text'] {
  padding: 8px;
  border-radius: 4px;
}

.question {
  margin-top: 64px;
}
</style>
