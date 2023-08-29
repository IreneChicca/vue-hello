const { createApp } = Vue

createApp({
  data() {
    return {
      message: 'Hello World! (:',
      imgpath: './img/paw.png',
      textCenter: 'text-center p-4 border',
      round: 'rounded-circle'
      
    }
  }
}).mount('#app')