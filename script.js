const numeroMaximoDePersonagens = 671;

gerarNumeroAleatorio = () => {
    return Math.floor(Math.random() * numeroMaximoDePersonagens);
}

const imagensPersonagens = document.querySelectorAll('img');
const nomesPersonagens = document.querySelectorAll('p'); 

buscarPersonagens = (numeroDaImagem) => { 
    const id = gerarNumeroAleatorio();
    return fetch(`https://rickandmortyapi.com/api/character/${id}`, {
        method: 'GET',
        headers: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }).then((response) => response.json()).then((data) => {
        imagensPersonagens[numeroDaImagem].src = data.image
        imagensPersonagens[numeroDaImagem].alt = `Nome do personagem: ${data.name}` 
        nomesPersonagens[numeroDaImagem].innerHTML = `Nome: ${data.name}`
    })
}

buscarPersonagens(0)
buscarPersonagens(1)
buscarPersonagens(2)
buscarPersonagens(3)