/* eslint-disable */
import "bootstrap";
import "./style.css";

window.onload = function() {
  document.querySelector("#btn").addEventListener("click", () => {
    document.querySelector("#excuse").innerHTML = generateExcuse();
  });
  console.log("Hello Rigo from the console!");
};

let generateExcuse = () => {
  let person = ["my brother ", "my cat ", "my neighbor ", "my dad ", "my dog "];
  let action = [
    "stole my ",
    "ate my ",
    "ripped up my ",
    "ran over my ",
    "broke my "
  ];
  let posession = ["homework ", "car ", "project ", "food ", "bike "];
  let time = [
    "on my way to work",
    "while I was on vacation",
    "on my way to class",
    "while I was in the store",
    "when I was at the gym"
  ];

  let perIndx = Math.floor(Math.random() * person.length);
  let actIndx = Math.floor(Math.random() * action.length);
  let posIndx = Math.floor(Math.random() * posession.length);
  let timIndx = Math.floor(Math.random() * time.length);

  return (
    person[perIndx] +
    "" +
    action[actIndx] +
    "" +
    posession[posIndx] +
    "" +
    time[timIndx]
  );
};
