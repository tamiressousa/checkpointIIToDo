const apiBaseUrl = 'https://todo-api.ctd.academy/v1'
const jwt = localStorage.getItem('jwt')
const submitButtonNewTaskRef =document.querySelector('#submitButtonNewTask')
const openTasksListRef = document.querySelector('#openTaskList')
const requestHeadersAuth = {
    "Accept": "application/json",
    "Content-Type": "application/json",
    "Authorization": jwt
}
//Limpar o local storage
function logOut() {

    localStorage.clear()
    window.location.href = 'index.html'

}
//função para criar tarefas
function createTask(event){

    event.preventDefault()

    const task={
        description: 'Entregar App To-Do',
        "completed":false
    }

    const requestSettings = {
        method:'POST',
        body:JSON.stringify(task),
        headers: requestHeadersAuth
    }
    fetch(`${apiBaseUrl}/tasks`, requestSettings).then(
        response =>{
            response.json().then(
                data => {
                    console.log(data)
                }
            )
        }
    )
}

function insertTaskHtml(tasks){

    openTasksListRef.innerHTML = ''

    for(let task of tasks){
        openTasksListRef.innerHTML +=` 
        <li class="tarefa">
        <div class="not-done"></div>
        <div class="descricao">
          <p class="nome">${task.description}Nova tarefa</p>
          <p class="timestamp">Criada em: ${task.createAt} 15/07/21</p>
        </div>
      </li>
      
    }`
}
}

//função para obter as tarefas
function getTasks() {

    const requestSettings = {
        method: 'GET',
        headers: requestHeadersAuth
    }

    fetch(`${apiBaseUrl}/tasks`, requestSettings).then(
        response => {
            if(response.ok) {
                response.json().then(
                    tasks => {
                        console.log(tasks)
                    }
                )
            } else {
                if(response.status === 401) {
                    logOut()
                }
            }
        }
    )

}

function separateTasks(tasks) {
    const newTasks = [];
    const completedTasks = [];
  
    tasks.forEach(task => {
      if (task.completed) {
        completedTasks.push(task);
      } else {
        newTasks.push(task);
      }
    });
  
    return {
      newTasks,
      completedTasks
    };
  }
  
// Chamada da função para separar as tarefas
const separatedTasks = separateTasks(tasks);

// Acesso às tarefas novas
const newTasks = separatedTasks.newTasks;
console.log("Novas tarefas:", newTasks);

// Acesso às tarefas concluídas
const completedTasks = separatedTasks.completedTasks;
console.log("Tarefas concluídas:", completedTasks);

function deleteTask(taskId) {
    const requestSettings = {
      method: 'DELETE',
      headers: requestHeadersAuth
    };
  
    fetch(`${apiBaseUrl}/tasks/${taskId}`, requestSettings)
      .then(response => {
        if (response.ok) {
          console.log("Tarefa excluída com sucesso!");
          // Faça qualquer ação adicional necessária após excluir a tarefa
        } else {
          console.log("Falha ao excluir a tarefa.");
        }
      })
      .catch(error => {
        console.error("Erro ao excluir a tarefa:", error);
      });
  }

//Verificação do usuário
function checkAuthUser() {

    if(jwt === null) {

        logOut()
    
    } else {
    
        getTasks()
    
    }

}

submitButtonNewTaskRef.addEventListener('click', event => createTask(event))

checkAuthUser() 