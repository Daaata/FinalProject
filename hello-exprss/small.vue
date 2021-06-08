var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
var app3 = new Vue({
  el: '#app-3',
  data: {
    seen: false,
    like: false
  }
})
var app4 = new Vue({
  el: '#app-4',
  data: {
    todos: [
      { text: 'Learn JavaScript' },
      { text: 'Learn Vue' },
      { text: 'Build something awesome' }
    ]
  }
})
var app5 = new Vue({
  el: '#app-5',
  data: {
    n: '1'
  }
})