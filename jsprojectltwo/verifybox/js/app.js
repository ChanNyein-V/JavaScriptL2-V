const codes = document.querySelectorAll('.code');
// console.log(codes);
codes[0].focus();

codes.forEach((code,index)=>{
    console.log(code);

    code.addEventListener('keydown',(e)=>{

        if(e.key >= 0 && e.key <= 9){

            // codes[index +1].focus();

            codes[index].value = '';

            if(index !== codes.length) {
                setTimeout(()=>codes[index+1].focus(),10);
            }

        }
        else if(e.key === "Backspace"){

            if(index !== 0){
                setTimeout(()=>codes[index - 1].focus(),10);
            }

        }
    })
});