var firstbox = document.getElementById("num_one");       //got these easy, cause i referred to the
var secondbox = document.getElementById("num_two");      //code from today. just gave the ids from
var solution = document.getElementById("answer");         //HTML a var name.
var button = document.getElementById("calculateBtn");

var handleClick = function(){                             //use the handleClick var to let the
  console.log("clickedOn");                               //programmer know that the button works.
}


// function add(a,b){                                     //this is what i originally thought it would
//   firstbox + secondbox                                 //be, but then realized i have to give (a)
//   return solution                                      //and (b) a value. MDN on value:	The value to be
                                                          //sent to the server
                                                          //server being the button
// }

function add(a, b) {
  var a = document.getElementById("num_one").value;        //the function called add has to arguments
  var b = document.getElementById("num_two").value;        //(a,b) must give a value to (a) and a
  var c = parseInt(a)+ parseInt(b);                        //value to (b)
  document.getElementById("answer").innerHTML = c;         //MDN on parseInt: function parses a string
                                                          //argument and returns an integer
};
                                  //also, how do i get it to have a plus sign so the user knows its adding
                                  //the two boxes?


button.addEventListener('click', handleClick);
button.addEventListener('click', add);

// var calculate = add(firstbox, secondbox);
console.log(add);
