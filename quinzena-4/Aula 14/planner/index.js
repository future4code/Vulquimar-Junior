const inputTarefa = document.getElementById("tarefa");
const diasDaSemana = document.getElementById("dias-semana");

document.addEventListener('keypress', function(e){
  if(e.which == 13){
   document.getElementById("tecla-enter").click();
   event.preventDefault()
  }
});

function adicionarTarefa() {

    var minhasTarefas = "";
    var tarefa = inputTarefa.value;

    if (tarefa == "") {

      alert("Você não adicionou tarefa!!!");
    
    }else if (diasDaSemana.value === "domingo") {
        minhasTarefas = document.getElementById("domingoTarefa");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";
      
    } else if (diasDaSemana.value === "segunda") {
        minhasTarefas = document.getElementById("segundaTarefa");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";
        
    } else if (diasDaSemana.value === "terca") {
        minhasTarefas = document.getElementById("tercaTarefa");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";

    } else if (diasDaSemana.value === "quarta") {
        minhasTarefas = document.getElementById("quartaTarefa");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";

    } else if (diasDaSemana.value === "quinta") {
        minhasTarefas = document.getElementById("quintaTarefa");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";

    } else if (diasDaSemana.value === "sexta") {
        minhasTarefas = document.getElementById("sextaTarefa");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";

    } else if(diasDaSemana.value === "sabado") {
        minhasTarefas = document.getElementById("sabadoTarefa");
        minhasTarefas.innerHTML += `<li>${tarefa}</li>`;
        inputTarefa.value = "";

    }
}
