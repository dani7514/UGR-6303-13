

const myForm=document.querySelector('form');
const inputs=document.querySelectorAll('input');
const required=["name","email","password","contact","comment"];

myForm.addEventListener("submit",formValidation);

function formValidation(e) {
    console.log("dani")
    e.preventDefault();
    let error=false;
    inputs.forEach(function(el) {
        let temp=el.getAttribute("id");
        if(temp!=null){
            if (temp==="name") {
                let exp= /[A-Za-z]+$/;
                let result= exp.test(el.value);
                if (!result){
                    addError(el,"must be valid",temp);
                    error=true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if (temp === "email") {
                let exp = /([A-Za-z0-9._-]+@[A-Za-z0-9._-]+\.[A-Za-z0-9]+)\w+/;
                let result = exp.test(el.value);
                if (!result) {
                addError(el, "must be valid", temp);
                error = true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if (temp === "password") {
                let exp = /[A-Za-z0-9]+$/;
                let result = exp.test(el.value);
                if (!result) {
                addError(el, "Only numbers and Letters", temp);
                error = true;
                }
                if (!(el.value.length > 3 && el.value.length < 9)) {
                    addError(el, "Needs to be between 3-8 characters", temp);
                    error = true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }  
            }
            if (temp==="contact") {
                let exp = /^[0-9]\d{9}$/;
                let result = exp.test(el.value);
                if (!result) {
                    addError(el, "Needs to be valid 10 digit number", temp);
                    error = true;
                }
                else {
                    let text=el.nextElementSibling;
                    text.innerHTML='';
                }
            }
            if(el.value.length===0 && required.includes(temp)){
                addError(el,"Required Field",temp);
                error= true; 
            }
            

        }
    });
    
    if (!error) {
        let succss= document.createElement('div');
        let form=document.querySelector('.register-form');
        let form1=document.getElementById('contact')
        succss.textContent="Successfully!";
        succss.style.textAlign = "center"
        
        succss.style.padding="0em 1em"
        succss.style.backgroundColor="green";
        succss.style.color="white";
        succss.style.zIndex="2"
       
        form1.appendChild(succss)
        form.appendChild(succss)
       
        Array.prototype.forEach.call(form.querySelectorAll("input"), inp => {
            inp.addEventListener("focus", () => succss.style.display = "none" )
        })
       
    }
}

function addError(el ,message,fieldName) {
    let errorText=el.nextElementSibling;
    errorText.innerHTML=fieldName + " " + message;
    errorText.style.color="red";
    el.focus();
}



