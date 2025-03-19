let amigos = [];

function adicionarAmigo() {
  let nome = document.getElementById('amigo').value.trim();
  if (nome && !amigos.includes(nome)) {
    amigos.push(nome);
    atualizarListaAmigos();
    document.getElementById('amigo').value = '';
  } else {
    alert('Nome inválido ou já adicionado.');
  }
}

function atualizarListaAmigos() {
  let lista = document.getElementById('listaAmigos');
  lista.innerHTML = '';
  amigos.forEach(amigo => {
    let item = document.createElement('li');
    item.textContent = amigo;
    lista.appendChild(item);
  });
}

function sortearAmigo() {
  if (amigos.length === 0) {
    alert('A lista de amigos está vazia. Adicione nomes antes de sortear.');
    return;
  }
  let indiceAleatorio = Math.floor(Math.random() * amigos.length);
  let amigoSorteado = amigos[indiceAleatorio];
  document.getElementById('resultado').innerHTML = `<li>Amigo sorteado: ${amigoSorteado}</li>`;
}