// display one array item at a time 

const myTexts = ['Faysal' , 'Hasan' , 'Bangladesh'];
const textArea = document.getElementById('my-text');

document.getElementById('my-btn').addEventListener('click',()=>{
    let i =0;

    setInterval(()=> {            
    document.getElementById('my-text').innerHTML = myTexts[i++];    
    if (i == myTexts.length) 
    {i = 0};   
}, 1000); 

})

