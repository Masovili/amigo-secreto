let amigos = [];

function validarNome() {
    let nome = document.querySelector('#nomeAdicionado').value;
    if (amigos.includes(nome)){
        alert(`O nome ${nome} já foi adicionado`);
    }
    else if(nome == '') {
        alert("Por favor, digite um nome válido!!");
    }
    else {
        amigos.push(nome);
        limparListas();
        aparecerNomeAmigo();
        limparCampo('nomeAdicionado');
    }
}

function aparecerNomeAmigo() {
    let listaAmigos = document.querySelector('#listaAmigos');
    listaAmigos.innerHTML = "";
    for (let i = 0; i < amigos.length; i++) {
        listaAmigos.innerHTML += `<li>${amigos[i]}</li>`;
    }
}

function limparListas(){
    document.querySelector('#listaAmigos').innerHTML = "";
}

function limparCampo(campo) {
    nome = document.getElementById(campo);
    nome.value = '';
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let index = parseInt(Math.random() * amigos.length);
        let amigoSecreto = amigos[index];
        let resultado = document.querySelector('#resultado');
        
        amigos.splice(index, 1); // Remove o nome sorteado
        limparListas(); // Remove a lista antes de exibir o resultado
        
        if (amigos.length === 0) {
            resultado.innerHTML = `<li>Todos os nomes foram sorteados</li>`;
            confeteDoCliff(); // Dispara confete apenas quando todos forem sorteados
        } else {
            resultado.innerHTML = `<li>O amigo secreto sorteado é: ${amigoSecreto}</li>`;
            aparecerNomeAmigo(); // Atualiza a lista após remover o nome
        }
    }
    else {
        validarNome();
    }
}

function novoSorteio() {
    limparListas();
    document.querySelector('#resultado').innerHTML = "";
    amigos = [];
}

function confeteDoCliff() {
    var end = Date.now() + (15 * 1000);
    var colors = ['#4b69fd', '#ffffff'];

    (function frame() {
        confetti({
            particleCount: 2,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
            colors: colors
        });
        confetti({
            particleCount: 2,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
            colors: colors
        });
        if (Date.now() < end) {
            requestAnimationFrame(frame);
        }
    }());
}
