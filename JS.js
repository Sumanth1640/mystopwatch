let a;

let ms=document.getElementById("m_sec");
let sec=document.getElementById("sec");
let min=document.getElementById("min");
let hour=document.getElementById("hour");

let Srt=document.getElementById("A31");
let Stp=document.getElementById("A32");
let Rset=document.getElementById("A33");

function Start(){
    Srt.setAttribute("disabled","");
    Stp.removeAttribute("disabled");

    let w=00;
    let x=00;
    let y=00;
    let z=00;

    a=setInterval(Begin, 9);
    

    function Begin(){
        w++;
        ms.innerHTML=w;
        
        if(w==100){
            x++;
            sec.innerHTML=x;

            w=00;
        }

        if(x==60){
            y++;
            min.innerHTML=y;

            x=00;
        }

        if(y==60){
            z++;
            hour.innerHTML=z;

            y=00;
        }

    }
    
}



function Stop(){
    clearInterval(a);

    Stp.setAttribute("disabled","");
    Rset.removeAttribute("disabled");
}


function Reset(){
    
    if(confirm("Are you sure to reset it...?")){

        Rset.setAttribute("disabled","");
        Srt.removeAttribute("disabled");
        

        ms.innerHTML="00";
        sec.innerHTML="00";
        min.innerHTML="00";
        hour.innerHTML="00";

    }
    
}



