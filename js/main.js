// display array items one after one by clicking on the button
const  texts = ["Faysal", "Hasan" , "Bangladesh"];
const  myText = document.getElementById("my-text");
let  index = 0;

myText.innerHTML = texts[0];

const handleClick = ()=>{
    
    
        setTimeout(()=>{
            index++;
        index %= texts.length;
        myText.innerHTML = texts[index];
        },200)
    
}





















// document.getElementById('my-btn').addEventListener('click',()=>{
    
// })

