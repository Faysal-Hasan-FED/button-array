const  texts = ["Faysal", "Hasan" , "Bangladesh"];
const  myText = document.getElementById("my-text");
let  index = 0;

myText.innerHTML = texts[0];

document.getElementById('my-btn').addEventListener('click',()=>{
    setTimeout(()=>{
        index++;
    index %= texts.length;
    myText.innerHTML = texts[index];
    },1000)
})

