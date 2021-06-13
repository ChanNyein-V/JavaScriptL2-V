const counters = document.querySelectorAll('.counter');
// console.log(counters);

counters.forEach( (counter) => {
    // console.log(counter);
    counter.innerText = '0';

    const updatecounter = () => {
        // console.log("abc");
        // const target = Number(counter.getAttribute('data-target'));
        const target = +counter.getAttribute('data-target');
        
        /*သူက data ရလား မရလာ စစ်တာ
        console.log(target);*/
        /* သူကတော့ data type စစ်တာ 
        console.log(typeof target, target); 
        
        ဒါကို number ပြောင်းချင်ရင် number() ဆိုတဲ့ function ကိုသုံးပြီပြောင်းလို့ရတယ်
        ဒါမှမဟုတ် '+' အရှေ့မှာခံလိုက်ရင်လည်းရတယ်*/

        const ctr = Number(counter.innerText);
        console.log(ctr);

        //100 is as you like, we can divide what we want 'target/value' value ကကြီးရင်ပိုကြာတယ်
        const increment = target / 100;
        console.log(increment);

        if (ctr < target) {
            counter.innerText = Math.ceil(ctr + increment);
            /*
            `${Math.ceil(ctr + increment)}`
            ဒီထဲမှာရေးရတာက စာတွေနဲ့တွဲရေးတဲ့ ချိန်ကျရင် double-quotes/single quote မှာရေးလို့မရလို့ါ
            */
            setTimeout(updatecounter, 50);
            /**
             * 1000 = 1sec
             * အကြိမ်ကြိမ် သူလိုလို အလုပ်လုပ်နေဖို့အတွက်
             * settimeout ကထွက်တာ
             * setinterval က အဝင်
             */
        }
        /**
         * ctr က counter ထဲမှာစာသွားထည့်မှာ
         */
    }

    updatecounter();
});

// counters ဆိုပြီ variable ဆောက်လိုက်တာ ပြီရင် document.querySelectorAll
/* ဆိုပြီ counter ကိုခေါ်လိုက်တယ် ပြီရင် အဲဒါကို console မှာသွားကြည့်တော့ array ပုံစံနဲ့ဖြစ်နေတယ်
အဲဒါကို loop ပတ်ပြီထုတ်မှာ
foreach loop နဲ့ 
queryselector ကို ခေါ်ရင် double-quotes/single-quote ထည့်ပေးရတယ်
innertext က html မှာစာထည့်တာ
*/