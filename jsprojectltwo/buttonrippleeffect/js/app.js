const buttons = document.querySelectorAll('.btnripple');
// console.log(buttons);

buttons.forEach(function (button){
    // console.log(button);
    
    button.addEventListener('click',function (e) {
        // console.log('hay');
        // console.log(e);

        const cx = e.clientX;
        const cy = e.clientY;
        // console.log(cx,cy);

        const btntop = e.target.offsetTop;
        const btnleft = e.target.offsetLeft;
        // console.log(btntop,btnleft);

        const xinside = cx - btnleft;
        const yinside = cy - btntop;
        // console.log(xinside,yinside);

        //Create circle
        const circle = document.createElement('span');
        // circle.className = "circle";
        circle.classList.add('circle');
        // console.log(circle);

        circle.style.top = yinside+'px';
        circle.style.left = xinside+'px';

        // e.target.appendChild(circle);
        this.appendChild(circle);

        // console.log(this);// သူကျတော့ details ပဲပြတာ
        // console.log(e); //သူကကျတော့ information ကိုသွားတာ

        setTimeout(()=>{
            circle.remove();
        },600);
    });
});

/*
* this ဆိုတဲ့ function က regular function ပေါ်မှာပဲအလုပ်လုပ်တာ
*
* */