console.log("Hello!")

const textel = document.getElementById('text');
console.log(textel);

const speedel = document.getElementById('speed');
console.log(speedel.value);
/**
 * speedel value 1 တွက်ရတယ်ဆိုတာက သူရဲ့ min value ကြောင့်
 */

const text = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,";

/**
 * 'let' value ပြောင်းလို့ရတဲ့ variable
 * idx = 1 က စာလုံးတလုံးပေါ်စေချင်လို့
 * speed က သူပါသာအလုပ်လုပ်နေအောင်
 * 1000 ms = 1sec
 */
let idx = 1;
let speed = 1000;
// let speed = 500 / speedel.value;

function autotext() {
    // console.log("Hello")

    /**
     * slice က parameter 2ခု လက်ခံတယ် 
     * ဘယ်ကစမှာလည်း/ ဘယ်နှစ်လုံးယူမှာလည်း
     */
    textel.innerText = text.slice(0,idx);

    idx++;

    // text var ရဲ့ length ကိုရှာတာ
    // console.log(text.length);

    if (idx > text.length) {
        idx = 1;
    }
    setTimeout(autotext,speed);
    /**setTimeout ကထွက်သွားတာ
     * တခါရေးပြီရင် နောက်တခါရေးတာ အဲဒါကြောင့်
     */
}

/**
 * function ကရေးပြီရင်ပြန်ခေါ်သုံးရတယ်
 */
autotext();

/**
 * Event Listener နားထောင်မယ်ဆိုတာ input range ကိုနားထောင်မှာ
 * event listener မှာ click မသုံးပဲ change သုံးရင်လည်းရတယ်
 */

speedel.addEventListener('click',() => {
    console.log("Hi");
    speed = 2000 / speedel.value;
});

/**
 * speed = 1;
 * 2000 / 1 = 2000 = 2
 * 2000 / 50 = 400
 * ပြောမယ်ဆိုရင် တန်ဖိုးနည်းလေ ပိုမြန်လေဖြစ်နေတာ
 */