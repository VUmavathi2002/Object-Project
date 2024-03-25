// console.log(ran)
  document.getElementById("imgid").src =
  "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/sum-of-two-numbers-img.png";
let num1 = (document.getElementById("num1").value = Math.round(
  Math.random() * 100
));
let num2 = (document.getElementById("num2").value = Math.round(
  Math.random() * 100
));

let addNumber = () => {
  let num3 = num1 + num2;
  let ans = document.getElementById("ans").value;
  let ansid = document.getElementById("ansid");
  if (num3 == ans) {
    ansid.innerHTML = "You Got the Answer";
  } else {
    ansid.innerHTML = "Try Again!!!";
  }
};
let but = document
  .getElementById("checkid")
  .addEventListener("click", addNumber);
let restartNumber = () => {
  document.getElementById("num1").value = "";
  document.getElementById("num2").value = "";
  document.getElementById("ans").value = "";
  document.getElementById("ansid").innerHTML="";
};
let res=document.getElementById("restartid").addEventListener("click",restartNumber);

