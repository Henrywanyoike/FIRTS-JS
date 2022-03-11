const colors = ["green","red", "rgba(133,122,200)","#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function () { 
    // get random number between 0-3 colors
  const randomNumber = getRandonNumber(); 
  console.log(randomNumber);
  document.body.style.backgroundColor = color[randomNumber];
  color.textContent = colors[randomNumber];
});

Function getRandomNumber(){
    return Math.floor(Math.random() *colors.length);
}