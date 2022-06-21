Vue.createApp({
  data() {
    return {
      languages: ["vue js", "angular", "react", "js", "php", "sql", "poo"],
      authors: [
        { nom: "michael", lang: "php", year: 2012 },
        { nom: "jack", lang: "angular", year: 2011 },
        { nom: "mike", lang: "vue", year: 2022 },
        { nom: "jana", lang: "symfony", year: 2011 },
      ],
    };
  },
}).mount("#app");
