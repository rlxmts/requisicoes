async function buscaApi(elemento){
    const conexao = await fetch(`http://localhost:3000/videos?q=${elemento}`);
    const conexaoConvertida = conexao.json();

   return conexaoConvertida;
}

async function buscaVideo(evento){
    evento.preventDefault();
    const dadosPesquisa = document.querySelector('[data-pesquisa]').value;
    console.log(dadosPesquisa)
    const busca = await buscaApi(dadosPesquisa);

    console.log(busca)
}

const botaoPesquisa = document.querySelector("[data-botao]");

botaoPesquisa.addEventListener( 'click', evento =>  buscaVideo(evento));