let listaDeamigos = []; // Array que armazenará os amigos adicionados
let lista = document.getElementById("listaAmigos"); // Obtém o elemento <ul> onde a lista será exibida
let inputNomeInserido = document.getElementById("amigo"); // Obtém o campo de entrada do usuário
let resultado = document.getElementById("resultado"); // Obtém o elemento onde o resultado do sorteio será exibido

// Função para adicionar um amigo à lista
function adicionarAmigo() {
  let nomeAmigo = inputNomeInserido.value.trim(); // Remove espaços extras no início e no final do nome

  // Verifica se o nome está vazio
  if (nomeAmigo === "") {
    alert("Informe o nome do amigo.");
    return;
  }

  // Verifica se o nome tem pelo menos 3 caracteres
  if (nomeAmigo.length < 3) {
    alert("O nome deve ter pelo menos 3 letras.");
    return;
  }

  // Verifica se o nome já foi adicionado à lista
  if (listaDeamigos.includes(nomeAmigo)) {
    alert("Amigo já adicionado.");
    return;
  }

  listaDeamigos.push(nomeAmigo); // Adiciona o nome à lista de amigos
  atualizarLista(); // Atualiza a exibição da lista na interface
  inputNomeInserido.value = ""; // Limpa o campo de entrada após a adição
}

// Captura o evento "Enter" no campo de entrada para adicionar o amigo sem precisar clicar em um botão
inputNomeInserido.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    adicionarAmigo();
    event.preventDefault(); // Evita que o Enter submeta um formulário (caso esteja dentro de um <form>)
  }
});

// Função para atualizar a lista de amigos na interface
function atualizarLista() {
  lista.innerHTML = ""; // Limpa a lista antes de recriá-la

  // Percorre o array e cria um item <li> para cada amigo na lista
  listaDeamigos.forEach((amigo) => {
    let item = document.createElement("li");
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

// Função para sortear um amigo secreto
function sortearAmigo() {
  if (listaDeamigos.length < 2) { // Garante que há pelo menos dois amigos para o sorteio
    alert("Adicione pelo menos dois amigos para sortear.");
    return;
  }

  let amigoSorteado =
    listaDeamigos[Math.floor(Math.random() * listaDeamigos.length)]; // Escolhe um amigo aleatoriamente
  resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`; // Exibe o resultado
}

// Função para limpar a lista de amigos
function limparLista() {
  listaDeamigos = []; // Reinicia o array
  atualizarLista(); // Atualiza a interface removendo os itens
  resultado.innerHTML = ""; // Limpa o resultado do sorteio
}
