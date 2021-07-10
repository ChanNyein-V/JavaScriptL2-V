const gettoggles = document.querySelectorAll('.faq-toggle');
// console.log(gettoggles);

gettoggles.forEach(gettoggle=>{
    // console.log(gettoggle);

    gettoggle.addEventListener('click',()=>{
        // console.log('hay');

        gettoggle.parentNode.classList.toggle('active');
    })
});

/* 
gettoggle.parentNode.classList မှာ active မထည့်ပဲ toggle ထည့်တာက
 active နှိပ်ပြီရင် ဝင်သွားတာ သူကို ပြန်ပြီထွက်ချင်ရင် remove ကိုသုံးပြီလုပ်ရမှာ ကျတော့လည်းမရဘူး အဲဒါကြောင့် toggle ဆိုတာကိုသုံးလိုက်တာ
 ပြောမယ်ဆိုရင် toggle တချက်နှိပ်ရင် active ဝင်မယ် နောက်တချက်နှိပ်ရင် active ထွက်မယ်
*/

// 10FO75 WDFXXXX