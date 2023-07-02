const apiBaseUrl = 'https://todo-api.ctd.academy/v1'

//seleccionando o input nome
const nameInputRef = document.querySelector("#nameInput")

// seleccionando o input Sobrenome
const lastNameInputRef = document.querySelector("#lastNameInput")

// seleccionando o input
const emailInputRef = document.querySelector("#emailInput")

// seleccionando o input senha
const passwordInputRef = document.querySelector("#passwordInput")

// seleccionando o input repetir senha
const passwordRepitInputRef = document.querySelector("#passwordRepitInput")

// seleccionando o botao
const buttonFormRef = document.querySelector("#buttonForm")

const mensagemErro = document.querySelector(".erro_mensagem")



//coferir se os input estao com erro 
let formaHasError = {
    name: true,
    lastName: true,
    email: true,
    password: true,
    passwordRepit: true
}


let user = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
}

//desabilitar botao
function disabledButtonErro(){

    if(!formaHasError.inputEmail  && !formaHasError.inputPassword){
   
        buttonLoginSubmitRef.disabled = true
   
    }else{

        buttonLoginSubmitRef.disabled = false

    }
}

//avaliar input
function inputValidet(event){
    const target = event.target

    const isValided = target.checkValidity()

    if(isValided){

        target.classList.remove("error")
        formaHasError[target.name] = true
        buttonLoginSubmitRef.classList.remove("errorButton")
        mensagemErro.innerHTML = ""
    }else{

        mensagemErro.innerHTML = "error de digitaçao"
        formaHasError[target.name] = false
        target.classList.add("error")
        buttonLoginSubmitRef.classList.add("errorButton")

    }

    disabledButtonErro()
}


function createUser(event) {

    event.preventDefault()

    const requestHeaders = {
        "Accept": "application/json",
        "Content-Type": "application/json"
    }

    const requestSettings = {
        method: 'POST',
        body: JSON.stringify(user),
        headers: requestHeaders
    }

    fetch(`${apiBaseUrl}/users`, requestSettings).then(
        response => {
            console.log(response)
            if (response.ok) {
                response.json().then(
                    response => 
                    {
                        console.log('usuario cadastrado com sucesso')
                        window.location.href = 'index.html'
                    }
                )
                
            } else {
                alert('esse e-mail ja foi cadastrado')
            }
        }
    )

}

buttonSubmitRef.addEventListener('click', event => createUser(event))

emailInputRef.addEventListener('keyup', event => {
    console.log(event.target.checkValidity())
})

//desabilitar botao
function disabledButtonErro() {

    if (!formaHasError.name && !formaHasError.lastName && !formaHasError.email && !formaHasError.password && !formaHasError.passwordRepit) {

        buttonFormRef.disabled = true

    } else {

        buttonFormRef.disabled = false

    }

}






