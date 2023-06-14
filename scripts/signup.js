
                         //seleccionando o input nome
const nameInputRef= document.querySelector("#nameInput")

                         // seleccionando o input Sobrenome
const lastNameInputRef= document.querySelector("#lastNameInput")

                         // seleccionando o input
const emailInputRef= document.querySelector("#emailInput")

                         // seleccionando o input senha
const passwordInputRef= document.querySelector("#passwordInput")

                          // seleccionando o input repetir senha
const passwordRepitInputRef = document.querySelector("#passwordRepitInput")

                         // seleccionando o botao
const buttonFormRef = document.querySelector("#buttonForm")



//coferir se os input estao com erro 
let formaHasError = {
    name: true,
    lastName: true,
    email: true,
    password: true,
    passwordRepit: true
  }



//deshabilitar botao
function disabledButtonErro(){
  

    if(!formaHasError.name && !formaHasError.lastName && !formaHasError.email && !formaHasError.password && !formaHasError.passwordRepit ){
    
      botonForm.disabled = false
       
    }else{
    
      botonForm.disabled = true
      
    }
    
    
    
    
    }