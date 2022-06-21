Vue.createApp({
  data() {
    return {
      message: "Hello World",
      counter: 0,
      x: 0,
      y: 0,
      color: true,
    };
  },

  methods: {
    goclick() {
      console.log("goclick");
    },
    goMouse() {
      console.log("goMouse");
    },
    increase(step, event) {
      console.log(event);
      this.counter += step;
    },
    decrease(step, event) {
      console.log(event);
      this.counter -= step;
    },
    goInput(evt) {
      //   console.log(evt);
      const target = evt.target;
      console.log(target.value);
      //target.value = 'Bonjour'
    },
    updateCoordonnee(event) {
      //   console.log(event.clientX, event.clientY);
      this.x = event.clientX;
      this.y = event.clientY;
    },
    modifEvent1(str) {
      console.log(str);
    },
    submitForm() {
      console.log(this.submitForm);
    },
    changeColor() {
      this.color = !this.color;
    },
  },
}).mount("#app");
