const helloBtn = document.getElementByld("helloBtn");
const message = document.getElementById("message");

helloBtn.addEventListener("click",()=>{
    const hour = new DataTransfer().getHours();
    let greeting = "こんにちわ！";
    if(hour<12){
       greeting="おはようございます！";
    }else if(hour>=18){
        greeting="こんばんは！";
    }
    message.textContent='${greeting}GitHub Pages の公開に成功しました！';
});