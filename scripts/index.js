
                       // input email

                       const  inputEmailRef = document.querySelector("#inputEmail")

                       // input senha
const  inputPasswordRef = document.querySelector("#inputPassword") 

                       //botao de enviar
const   buttonRef = document.querySelector("#buttonsent")

                      // mensagem de erro
const mensagemErro = document.querySelector(".erro_mensagem")






buttonRef.disabled = true;


//coferir se os input estao com erro 

//objeto usuario 

let user = {
   name:'',
   password:''
   
   }


let formaHasError ={

   inputEmail: true,

   inputPassword: true


}

//avaliar input
function inputValidet(event){
const target = event.target

const isValided = target.checkValidity()

if(isValided){

   target.classList.remove("error")
   formaHasError[target.name] = true
   buttonRef.classList.remove("errorButton")
   mensagemErro.innerHTML = ""
}else{


   mensagemErro.innerHTML = "error de digitaçao"
   formaHasError[target.name] = false
   target.classList.add("error")
   buttonRef.classList.add("errorButton")


}

disabledButtonErro()

}


//deshabilitar botao
function disabledButtonErro(){

if(!formaHasError.inputEmail  && !formaHasError.inputPassword){
   
   buttonRef.disabled = true
   
   


}else{

buttonRef.disabled = false

}}



//botao entrar 
function sentButton(){

const userEmail = inputEmailRef.value

localStorage.setItem("user", userEmail)


   window.location.href = "../pages/tarefas.html"

 
}



inputEmailRef.addEventListener("keyup",(event)=>inputValidet(event))

inputPasswordRef.addEventListener("keyup",(event)=>inputValidet(event))

buttonRef.addEventListener("click", function(event) {
    event.preventDefault();
    sentButton();
  });
  
