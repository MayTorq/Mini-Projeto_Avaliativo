const form = document.getElementById("formTarefas");
const container = document.getElementById("cards");

let tarefas = JSON.parse(localStorage.getItem("tarefas")) || [];

function salvarTarefas() {
    localStorage.setItem("tarefas", JSON.stringify(tarefas));
}

function renderizarTarefas() {
    container.innerHTML = "";
    tarefas.forEach((tarefa, index) => {
        criarCard(tarefa, index);
    });
}

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nomeTarefa = document.getElementById("tarefa").value.trim();

    if (nomeTarefa) {
        const novaTarefa = new Tarefa(nomeTarefa);
        tarefas.push(novaTarefa);
        salvarTarefas();
        renderizarTarefas();
        form.reset();
    }
});

class Tarefa {
    constructor(nome) {
        this.tarefa = nome;
    }
}

function criarCard(instancia, index) {
    const card = document.createElement("div");
    card.classList.add("card");
    
    const paragrafo = document.createElement("p");
    paragrafo.innerText = `${instancia.tarefa}`;

    const btnExcluir = document.createElement("button");
    btnExcluir.innerText = "Excluir tarefa";
    btnExcluir.style.backgroundColor = "#e9ecef";
    btnExcluir.style.color = "#121212";
    btnExcluir.onclick = () => {
        tarefas.splice(index, 1);
        salvarTarefas();
        renderizarTarefas();
    };

    card.appendChild(paragrafo);
    card.appendChild(btnExcluir);
    container.appendChild(card);
}

renderizarTarefas();