function randomRGB() {
    let randomColor;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    //return r //"rgb(${r},${g},${b})"
    //console.log(r);
    //console.log(g);
    //console.log(b);
    //console.log("rgb("+r+","+g+","+b+")");

    randomColor = "rgb("+r+","+g+","+b+")";
    return randomColor;
}

const h2 = document.querySelector('h2');
const colorChangingLetters = document.querySelectorAll('.colorChangingLetter');


setInterval(function () {
for(let letter of colorChangingLetters) {
    letter.style.color = randomRGB();
}

}, 1000);



//setInterval(function () {
//    h2.style.color = randomRGB();
//}, 1000); 


