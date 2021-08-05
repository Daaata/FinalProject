var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    loading: false,
    showing: true,
    score: 100,
    colors: ['black','red','blue'],
    families: [{father:'Tom'},{father:'Jim'}]
  },
  methods:{
    myfa: function(father){
      alert('我的爸爸'+father)
    }
  }
})

var app4 = new Vue({
  el: '#app-4',
  data:{
    todos: [{text:'gogoog'},{text:'runrun'}]
  }
})