const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello World! (:',
      imgpath: './img/paw.png'
    }
  }
}).mount('#app')