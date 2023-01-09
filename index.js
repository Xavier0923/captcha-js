let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
console.log(canvas)
getRandom(150, 206)

// 隨機產生背景顏色
// 假設淺色150 ~ 206 之間 n0 三個至少一定有一個是150 一個是206 另外一個是150~206
function getRandom(min, max){
    let red = Math.floor(Math.random() * (max - min + 1) + min);
    let blue = Math.floor(Math.random() * (max - min + 1) + min);
    let green = Math.floor(Math.random() * (max - min + 1) + min);
    ctx.fillStyle = `rgb(${red},${green},${blue})`;
    ctx.fillRect(0, 0, 300, 150);
    ctx.font = "20px Arial";
    ctx.fillText("Sample String", 50, 100, [250]);

}

// 隨機產生數字英文

// 隨機產生斜線