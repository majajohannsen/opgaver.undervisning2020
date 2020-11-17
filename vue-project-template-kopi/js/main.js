"use strict";

let app = new Vue({
  el: '#app',
  data: {
todos:[{
  text:"Jeg skal vaske tøj"
},
{
text:"Jeg skal arbejde hjemmefra"
  },
  {
  text:"Jeg skal blive færdig med Vue.js projekt inden weekend"
},
{
  text:"Jeg skal huske at slappe af"
},
{
  text:"Jeg skal i fitness"
}
],
newTodo:{
  text:''
},
  },
  methods:{
    addTodo() {
      this.todos.push(this.newTodo);
      this.newTodo = {
        text: ''
      };
    }
  }
});