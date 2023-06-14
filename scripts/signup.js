const apiBaseUrl = 'https://todo-api.ctd.academy/v1'
const buttonSubmitRef = document.querySelector('#buttonSubmit')

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
            if(response.ok) {
                console.log('usuario cadastrado com sucesso')
            } else {
                alert('esse e-mail ja foi cadastrado')
            }
        }
    )

}

buttonSubmitRef.addEventListener('click', event => createUser(event))