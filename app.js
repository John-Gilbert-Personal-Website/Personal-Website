function randomRGB() {
    let randomColor;
    const r = Math.floor(Math.random() * 128);
    const g = Math.floor(Math.random() * 128);
    const b = 255; //Math.floor(Math.random() * 256);               blue fixed, red and green limited to half 
    //return r //"rgb(${r},${g},${b})"
    //console.log(r);
    //console.log(g);                                            can ignore - were all used to debug randomRGB()
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



