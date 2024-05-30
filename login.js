let names = document.querySelector(".name")
const nameRegex = /^[a-zA-Z]{4,15}$/;
let nError = document.querySelector(".alerts")


let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/ ;
let email = document.querySelector(".email")
let eError = document.querySelector(".alerts2")


let passwordPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*(),.?":{}|<>]).{8}$/ 
let pass = document.querySelector(".pass")
let pError = document.querySelector(".alerts3")

let confirmP= document.querySelector(".conf")
let cpError = document.querySelector(".alerts4")


let forms = document.querySelector("#forms")

forms.addEventListener('submit' , (event)=>{
    event.preventDefault()
    
    
    // name 

    if(nameRegex.test(names.value)){
        console.log(names.value);
    }else{
        nError.innerHTML ='length of name is between 4 - 15 charcters '
    }


    // email


    if(emailRegex.test(email.value)){
        console.log("email : "  + email.value);
    }
    else{
        // console.log("email is not valid ");
        // alert("email is not valid")
        eError.innerHTML = 'email is not valid'
    
    }
    


    // password

    if(passwordPattern.test(pass.value)){
        console.log("password : " +  pass.value);
       
    }
    
    
    else{
    
        if(pass.value.length !== 8  ){
    pError.innerHTML ="password must have 8 chracters"
    
    
        }
        else if (!/^[A-Z].*$/.test(pass.value)){
    // console.log();
    pError.innerHTML = 'password starts with capital letter'
        }
        else if(!/[!@#$%^&*()?]/.test(pass.value)){
            // console.log();
            pError.innerHTML =  "password must have 1 special character"
        }
    }




    // confirm password 


    if(confirmP.value != pass.value){
        cpError.innerHTML = 'password is not match'
    }
else{
    console.log(confirmP.value);
}

})

