// Define a new component called todo-item
Vue.component('todo-item', {
    template: '<li>This is a todo</li>'
  });
var app = new Vue({
    el: '#cornershopapp',
    data: {
        welcomemessage: 'Hello Corner Shops In!',
        footernote: 'You loaded this page on ' + new Date().toLocaleString(),
        reversemessage: 'click below to see me in reverse',
        userLoginEmail:'',
        userLoginPassword:''
    },
    methods: {
        reversemessagemethod: function () {
            this.reversemessage = this.reversemessage.split('').reverse().join('');
        }
    }
})

