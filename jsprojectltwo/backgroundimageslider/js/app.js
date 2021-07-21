// UI
const body = document.body;
const slides = document.querySelectorAll('.slide');

// console.log(body);

const leftbtn = document.getElementById('left');
const rightbtn = document.getElementById('right');

let activeslide = 0;

/* add background photo  */
function setbody(){
    body.style.backgroundImage = slides[activeslide].style.backgroundImage;
}

setbody();

/* to work with button */
function setactivesslide(){
    /* slides.forEach((slide)=>{
        // console.log(slide);

        slide.classList.remove('active');
    }); */

    slides.forEach(slide=>slide.classList.remove('active'));

    slides[activeslide].classList.add('active');
}

rightbtn.addEventListener('click',function(){
    // console.log('Hay from right');

    activeslide++;

    if(activeslide > slides.length -1){
        activeslide = 0;
    }

    setbody();
    setactivesslide();
});

leftbtn.addEventListener('click',function(){

    activeslide--;

    if(activeslide < 0){
        activeslide = slides.length -1;
    }

    setbody();
    setactivesslide();
});


// 4VW WDFXXXX

/* setbody() က ပုံကိုထည့်မယ်
slides ထဲက style.backgroundImage ဆိုတာက html ထဲက attribute ကိုယူသုံးပြီ ပြောင်းဖို့သုံးတာ html ထဲကရှိပြီသာ image ကို function ထည့်သုံး/ခေါ်သုံးတာ
*/