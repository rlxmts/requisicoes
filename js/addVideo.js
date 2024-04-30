const formulario = document.querySelector('[data-formulario]');

function adicionarVideo(e){
    e.preventDefault();
    const titulo = document.querySelector('[data-titulo]')
    const url = document.querySelector('[data-url]')
    const descricao = Math.floor( Math.random() * 10 + 1);
    const imagem = document.querySelector('[data-imagem]')
}

formulario.addEventListener( 'submit', evento => adicionarVideo(evento))