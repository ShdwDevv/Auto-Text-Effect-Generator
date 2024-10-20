const wordElement = document.querySelector('.js-word');
const arr = ['ARSHATH AHAMED','WEB DEVELOPER','STUDENT'];
let total = 1000;
setInterval(()=>{
    arr.forEach((val)=>{
    for(let i = 0; i < val.length;i++){
        console.log(total)
        setTimeout(()=>{
        wordElement.innerHTML =`Hello , I am ${val.slice(0,i+1)}`;
        },total);
        total += 100
    }
    total += 100;
    });
},500);