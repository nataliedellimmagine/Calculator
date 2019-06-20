function addNumbers(){
var number_one = document.getElementById("numberOne").value


var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) + parseInt(number_two))

var showAnswer = document.getElementById("sum").innerHTML = answer
}

function subtractNumbers(){
var number_one = document.getElementById("numberOne").value


var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) - parseInt(number_two))

var showAnswer = document.getElementById("subtract").innerHTML = answer
}

function divideNumbers(){
var number_one = document.getElementById("numberOne").value


var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) / parseInt(number_two))

var showAnswer = document.getElementById("divide").innerHTML = answer
}

function multiplyNumbers(){
var number_one = document.getElementById("numberOne").value


var number_two = document.getElementById("numberTwo").value

var answer = (parseInt(number_one) * parseInt(number_two))

var showAnswer = document.getElementById("multiply").innerHTML = answer
}
