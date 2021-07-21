// UI
const progress = document.getElementById('progress');
const circles = document.querySelectorAll('.circle');
// console.log(circles);
const prev = document.getElementById('prev');
const next = document.getElementById('next');

let currentactive = 1; //value ပြောင်းမယ်ဆိုရင် let/var သုံးလို့ရတယ် const က value တခုပဲရှိမှာမို့လို့

// Event Listener
next.addEventListener('click',()=>{
    currentactive++;
    // console.log(currentactive);
    // console.log(circles.length);
    if(currentactive > circles.length){
        currentactive = circles.length;
    }
    update();
});

prev.addEventListener('click',()=>{
    currentactive--;

    if(currentactive < 1){
        currentactive = 1;
    }
    update();
});

function update(){
    circles.forEach((circle,index)=> {
        // console.log(circle);
        if(index < currentactive){
            circle.classList.add('active');
        }else{
            circle.classList.remove('active');
        }

        if(currentactive === 1){
            prev.disabled = true;
        }else if(currentactive === circles.length){
            next.disabled = true;
        }else{
            prev.disabled = false;
            next.disabled = false;
        }

        const actives = document.querySelectorAll('.active');
        // console.log(actives.length);
        // console.log(actives.length,circles.length);
        // console.log(actives.length/circles.length);
        // console.log((actives.length/circles.length)*100);
        
        // step2 - 33% AND step3 - 66%

        let act = actives.length - 1;
        let cls = circles.length - 1;

        // console.log(act/cls);
        // console.log((act/cls)*100);

        // progress.style.width = (actives.length - 1) / (circles.length - 1) * 100 + "%";
        progress.style.width = (act / cls) * 100 + "%";
    });
}

update();