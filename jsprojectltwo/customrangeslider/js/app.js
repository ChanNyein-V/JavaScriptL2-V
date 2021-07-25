// UI
const range = document.getElementById('range');

range.addEventListener('input',(e)=>{
    // console.log('hay');
    // console.log(e.target);
    const value = +e.target.value;
    // console.log(value);
    // console.log(typeof value); //number

    const label = e.target.nextElementSibling;

    /*လက်ရှိ ရှိနေတဲ့ element ရဲ့ width ကို လိုချင်တော့ getComputeStyle & getPropertyValue ကိုသုံးမဘ်*/
    const rangewidth = getComputedStyle(e.target).getPropertyValue('width');
    // console.log(rangewidth);
    // console.log(rangewidth.length); //ထွက်လာတဲ့ element ရဲ့စာလုံးအရေအတွက်ကို တွက်တာ

    const labelwidth = getComputedStyle(label).getPropertyValue('width');
    // console.log(labelwidth);
    // console.log(labelwidth.length);

    const numrangewidth = rangewidth.substring(0,rangewidth.length-2); //မလိုအပ်တဲ့ string တွေကိုဖြတ်ထုတ်လိုက်တာ
    // console.log(numrangewidth);

    const numlabelwidth = labelwidth.substring(0,labelwidth.length-2);
    // console.log(numlabelwidth);

    const min = +e.target.min;
    const max = +e.target.max;
    // console.log(min,max);

    /*အပေါ်က label ကိုရွေးဖို့ formula*/
    // const leftright = value * (numrangewidth / max) - numlabelwidth / 2;
    const leftright = value * (numrangewidth / max) - (numlabelwidth / 2) + scale(value,min,max,10,-10);
    // console.log(leftright);
    label.style.left = `${leftright}px`;
    label.textContent = value; //set value to label in document


});

const scale = (num,inmin,inmax,outmin,outmax)=>{
    return (num - inmin) * (outmax - outmin) / (inmax - inmin) + outmin;
}

//24GCS WDFXXXX