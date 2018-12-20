var app = new Vue({
  el: '#app',
  data:{
    todos:[],
    newTodo:'',
    show: 1
  },
  methods:{
    addTodo: function(todo){
      this.todos.push({content:todo,completed: false})
      this.newTodo='';
    },
    removeTodo: function(todo){
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
    completedAll: function() {
      this.todos.forEach(item => item.completed=true);
    },
    completedClear: function() {
      this.todos.forEach(item => item.completed=false);
    },
    showAll: function() {
      this.show =1;
    },
    showComplete: function() {
      this.show =2;
    },
    showUndone: function() {
      this.show=3;
    }
  }
})
