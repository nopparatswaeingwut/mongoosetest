<div id="app">
    <p v-if="isMe">Hey, I am here {{ message }}</p>
  </div>
  
  <script>
    const app = new Vue({
      el: '#app',
      data: {
        message: 'Ahoy Vue!',
        isMe: true
      }
    })
  </script>