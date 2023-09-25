// jquery stuff

$("#btn_hide").click(function () {
  $("#second").hide();
})


$("body").keydown(function (event) {
  console.log(event.which);

  if (event.which === 72) {
    $("#second").hide();
  }

  if (event.which === 83) {
    $("#second").show();
  }

})










//regex it is used for email validaton 
var regex = /^[A-Z\s]+$/;

var emailValidation = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
var email = "test@gmail.com";
var upperCaseString = "ALL UPPER CASE STRING";

var lowerCaseString = "some characters";

// if (upperCaseString.match(regex)) {
//     alert("Yes, all lowercase");
// }
console.log(email.match(emailValidation));


// if (email.match(emailValidation)) {
//   alert("yes email  is valid");
// }




//closures
const outer = () => {
    let a = 10;
    const inner = () => {
        let b = 2938;
        console.log(a,b);
    }
    inner();
}

outer();



// var jedi = new Backbone.Model({
//   name: "Yoda",
//   age: 874,
// });

// console.log();

// var jediView = new Backbone.View({
//      model: jedi,
//     tagName: 'div',
//     jediTpl: _.template($('#jedi-template').html()),
//      render: function () {
//           this.$el.html(this.jediTpl(this.model.toJSON())));
//           return this;
//      }
// });

// jediView.$el.appendTo('body');

// jediView.render();


