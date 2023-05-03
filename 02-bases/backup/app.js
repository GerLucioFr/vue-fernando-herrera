const app = Vue.createApp({
  //   template: `
  //     <h1>Hola Mundo raza</h1>
  //     <p>{{ new Date() }}</p>
  //     `,
  data() {
    return {
      message: "Yo soy Iron Man",
      quote: "El Tony",
    };
  },
  methods: {
    changeQuote() {
      this.quote = "El Tony Stark";
    },
    capitalize() {
      this.quote = this.quote.toUpperCase();
    },
  },
});

app.mount("#my-app");
