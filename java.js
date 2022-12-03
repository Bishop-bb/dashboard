function info(){
    let name = document.getElementById('in1').value
    let nl = name.length
    let data 

            if (name == "") {
                data = "input your name"
            }
            else if(nl >= 7) {
                data = ""
            }
            else if(nl <= 6) {
                data = "Enter full name"
            }


            document.getElementById('ou1').innerHTML= data


            let email = document.getElementById('in2').value

            let mail 

            if (email == ""){
                mail = "input your email"
            }

            else if(email.indexOf('@', 3) != -1 && email.indexOf('.') != -1 && (email.indexOf('gmail') != -1)  && email.indexOf('com') != -1){
            mail = "Valid Mail"
           }

           else{
            mail= "Invalid Email"
           }

           document.getElementById('ou2').innerHTML= mail;




        //    PHONE NUMBER
           let number = document.getElementById('in3').value;

           let num 
   
           if( (number.includes('081') || number.includes('070') || number.includes('091') || number.includes('080')) && number.length ==11 ){
          num = "Valid Number"
          }
         else if ( number == "") {
               num = "Enter a valid number"
           }
           else{
           num = "Invalid number"
           }
   
         document.getElementById('ou3').innerHTML= num
         


        //  PASSWORD AND CONFIRM PASSWORD

     let password = document.getElementById('in4').value;

        let pd 
        if(password == "")(
            pd = "enter your password"
        )
        else if(password.length < 5){
            pd = "enter a longer password"
        }
        else{
            pd = ""
        }

        document.getElementById('ou4').innerHTML= pd


        let conpassword = document.getElementById('in5').value

        let con

        if(conpassword == ""){
            con = "password must be the same as the above"
        }
        else if(document.getElementById('in5').value == document.getElementById('in4').value){
            con = "password is a match"
        }
        else if(document.getElementById('in5').value != document.getElementById('in4').value){
            con = "password is not a match"
        }


        document.getElementById('ou5').innerHTML= con
}


function submit(){
    let name = document.getElementById('in1').value
    let email = document.getElementById('in2').value
    let number = document.getElementById('in3').value;
    let password = document.getElementById('in4').value;
    let conpassword = document.getElementById('in5').value

    

    if(name.length >= 7 && email.indexOf('@', 3) != -1 &&  email.indexOf('.') != -1  && email.indexOf('com') != -1 &&  (number.includes('081') || number.includes('070') || number.includes('091') || number.includes('080')) && number.length ==11 && document.getElementById('in5').value == document.getElementById('in4').value ){
    document.getElementById('m1').innerHTML = name
    document.getElementById('m2').innerHTML = email
    document.getElementById('m3').innerHTML = number
    document.getElementById('m4').innerHTML = conpassword
    document.getElementById('in1').value = ""
    document.getElementById('in2').value = ""
    document.getElementById('in3').value = ""
    document.getElementById('in4').value = ""
    document.getElementById('in5').value = ""

    

    }
    else{
        document.getElementById('m1').innerHTML = ""
        document.getElementById('m2').innerHTML = ""
        document.getElementById('m3').innerHTML = ""
        document.getElementById('m4').innerHTML = ""
    }

}

