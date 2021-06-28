// UI
const panels = document.querySelectorAll('.panel');
// console.log(panels);

panels.forEach((panel)=>{
    // console.log(panel);

    panel.addEventListener('click',()=>{
        // console.log("hay");

        removeactivepreclass(); /* active တွေကိုအားလုံးကိုဖယ်မယ် */
        panel.classList.add('active'); /* ပြီရင်လာထည့်မယ် */
    })
});

/* ဒီ function က panels တွေအကုန်မှာရှိတဲ့ active ဖယ်တဲ့ လုပ်ငန်းကိုလုပ်မှာ
click ခေါက်တဲ့ လုပ်ငန်းစဥ်ကိုလုပ်မှာမဟုတ်ဘူး */
function removeactivepreclass(){
    panels.forEach((panel)=>{
        panel.classList.remove('active');
    })
}