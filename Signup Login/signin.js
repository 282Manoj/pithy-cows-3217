var codearr=JSON.parse(localStorage.getItem("codeinfo")) || [];

mainarr=JSON.parse(localStorage.getItem("maininfo"));
function fun(event){
    event.preventDefault()
    if(event.keyCode===13){
    
             
    
        

        let otp="";
        for(let i=0;i<3;i++){
            otp+=Math.floor(Math.random()*10)
     }
    
    
       
     alert(`Your OTP is ${otp}`)
     //  return Number(otp)
     console.log(otp)
    
     var codeobj={
        cody:otp
     }
     codearr.push(codeobj)
     localStorage.setItem("codeinfo",JSON.stringify(codearr))
        
     
    
    
    }
 
}

function go(){
    event.preventDefault()
    console.log(mainarr)
    var query=document.getElementById("log-pass").value;
    // console.log(query)
    for(var i=0;i<codearr.length;i++){
        // console.log(codearr[i].cody)
        if(Number(query)==codearr[i].cody){
            alert("Login successfull")
            window.location.href="signup.html"
        }
    }
}