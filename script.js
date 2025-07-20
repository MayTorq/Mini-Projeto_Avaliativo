const form = document.getElementById("formTarefas");
const container = document.getElementById("cards");

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nomeTarefa = document.getElementById("tarefa").value.trim();

    if (nomeTarefa) {
        const novaTarefa = new Tarefa(nomeTarefa);
        tarefas.push(novaTarefa);
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

    card.appendChild(paragrafo);
    container.appendChild(card);
}