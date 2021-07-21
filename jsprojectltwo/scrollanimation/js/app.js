// UI
const boxes = document.querySelectorAll('.box');
// console.log(boxes);

/*ပုံတွေရဲ့ height ကိုတွက်မှာ*/
function checkboxes(){
    const innerheight = window.innerHeight / 5 * 4; //calculate the height of pic
    // console.log(innerheight);

    boxes.forEach(box=>{
       // console.log(box);

        const boxtop = box.getBoundingClientRect().top;
        // console.log(boxtop);

        if (boxtop < innerheight){
            box.classList.add('show');
        }else{
            box.classList.remove('show');
        }
    });
}

checkboxes();

window.addEventListener('scroll',checkboxes);

//17GBCR WDFXXXX


/*
* getBoundingClientRect() က လိုချင်တဲ့ box ရဲ့ height ကိုတွက်တဲ့အချိန်သုံးတာ အဲလိုမဟုတ်ပဲ
* bottom ကိုလိုချင်ရင် getBoundingClientRect() မှာ bottom ပေးရင် ရပြီ
* */