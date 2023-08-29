const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello World! (:',
      imgpath: './img/paw.png',
      textCenter: 'text-center'
    }
  }
}).mount('#app')