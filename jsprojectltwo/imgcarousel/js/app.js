// UI
const imgcarousel = document.getElementById('imgcarousel');
const imgs = document.querySelectorAll('#imgcarousel img');
// console.log(imgs);
const leftbtn = document.getElementById('left'),
    rightbtn = document.getElementById('right');

let idx = 0;

rightbtn.addEventListener('click',()=>{
    idx++;
    changeimage();
    resetInterval();

});

leftbtn.addEventListener('click',()=>{
    idx--;
    changeimage();
    resetInterval();
});

function changeimage(){

    if(idx > imgs.length -1){
        idx = 0;
    }else if (idx < 0){
        idx = imgs.length - 1;
    }
    // console.log(idx);

    /*idx ဝင်တဲ့အချိန်မှာပုံကိုပြောင်းချင်တော့ ဝင်လာတဲ့ idx အရှေ့မှာ (-)ကပ်ပြီ 500 နဲ့မြှောက်လိုက်တယ်
    * ပြီရင် သူကို css ရဲ့ imgcarousel မှာ သွားထည့်လိုက်တယ် style attribute ကိုသုံးပြီ*/
    imgcarousel.style.transform = `translate(${-idx * 500}px)`;
}

//ပုံကိုသူအလိုအလျှောက် ပြေးချင်လိုသုံးလိုက်တာ (function,timeout)
let interval = setInterval(imgrun,2000);

function imgrun(){
    idx++;
    changeimage(); //ဒါကပြန်ခေါ်ရမယ် ပုံကိုပြောင်းသွားစေချင်လို့
}

function resetInterval(){
    clearInterval(interval);
    interval = setInterval(imgrun,2000);
}