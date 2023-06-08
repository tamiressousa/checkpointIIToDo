
                       // input email

const  inputEmailRef = document.querySelector("#inputEmail")

                        // input senha
const  inputPasswordRef = document.querySelector("#inputPassword") 

                        //botao de enviar
const   buttonRef = document.querySelector(".buttonsent")

buttonRef.disabled = true

//coferir se os input estao com erro 

// let formaHasError ={

//     inputEmail: true,

//     inputPassword: true


// }

//avaliar input
function inputValidet(event){
const target = event.target.value.trim()
const isValided = target.checkValidity()

if(isValided){

    target.classList.remove("error")
    formaHasError[target.name] = true
}else{

    formaHasError[target.name] = false
    target.classList.add("error")



}

disabledButtonErro()

}

//deshabilitar botao
function disabledButtonErro(){

if(!formaHasError.inputEmail  && !formaHasError.inputPassword){

buttonRef.disabled = false

}else{

buttonRef.disabled = true

}}




inputEmailRef.addEventListener("keyup",(event)=>inputValidet(event))

inputPasswordRef.addEventListener("keyup",(event)=>inputValidet(event))


