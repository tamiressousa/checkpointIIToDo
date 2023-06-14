const apiBaseUrl = 'https://todo-api.ctd.academy/v1'

const buttonSubmitRef = document.querySelector('#buttonSubmit')
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



//coferir se os input estao com erro 
let formaHasError = {
    name: true,
    lastName: true,
    email: true,
    password: true,
    passwordRepit: true
}


var user = {
    firstName: "string",
    lastName: "string",
    email: "string",
    password: "string"
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
                console.log('usuario cadastrado com sucesso')
            } else {
                alert('esse e-mail ja foi cadastrado')
            }
        }
    )

}

buttonSubmitRef.addEventListener('click', event => createUser(event))



//deshabilitar botao
function disabledButtonErro() {


    if (!formaHasError.name && !formaHasError.lastName && !formaHasError.email && !formaHasError.password && !formaHasError.passwordRepit) {

        botonForm.disabled = false

    } else {

        botonForm.disabled = true

    }




}

