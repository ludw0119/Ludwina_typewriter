//event load
//declare counter and text - declare variables
//init
//store/read the text from div
//remove text from div
//reset counter
//start loop

/*
loop
find text from 0 to counter - substract (0,counter)
display textpart in HTML
counter++
if textlength > counter
delay 400ms
*/

"use strict";

window.addEventListener("DOMContentLoaded", init);

let text = document.getElementById("typewriter").textContent;
let counter = 0;

function init() {
  //console.log("init");
}

//console.log(text);

function hide() {
  document.getElementById("typewriter").textContent = "";
}

function loop() {
  for (let i = 0; i < text.length; i++) {
    /*alert("I am alert");*/

    //setTimeout(function() {
    let res = text.substr(0, counter + 1);
    document.getElementById("typewriter").innerHTML = res;
    counter++;
    console.log(res);
    //alert(i);
    //}, 400);
  }
}

loop();

/*if (counter != text.length) {
  setTimeout(loop, 400);
}/*

/*sources: - set timeout function https://stackoverflow.com/questions/5226285/settimeout-in-for-loop-does-not-print-consecutive-values
 */

/*function myFunction() {
  var str = "Hello world!";
  var res = str.substr(1, 4);
  document.getElementById("demo").innerHTML = res;
}*/

//Teacher - substring(0,counter) https://www.w3schools.com/jsref/tryit.asp?filename=tryjsref_substr
//Juliana - .length, split, var letter
