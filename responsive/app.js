let btn = document.querySelector("button");
let output = document.querySelector("#output")

function getRandomNum(min, max){
    let step1 = max - min + 1;
    let step2 = Math.random() * step1;
    let res = Math.floor(step2) + min;


    return res;

}
btn.addEventListener('click', () => {
    output.innerText = getRandomNum( 5, 50);
});