    let number1 = "";
    let astd;
    let number2;
    
    function click(evt){

       console.log(this.id);
       number1 += evt.target.innerText;
       console.log("n1 = " + number1);
       document.getElementById("display").innerHTML = number1;
    }


     document.getElementById("buttons").onclick = click;