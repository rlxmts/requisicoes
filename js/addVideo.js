import { conectaApi } from "./conectaApi.js";

const formulario = document.querySelector('[data-formulario]');

function adicionarVideo(e){
    e.preventDefault();
    const titulo = document.querySelector('[data-titulo]').value;
    const url = document.querySelector('[data-url]').value;
    const descricao = Math.floor( Math.random() * 10 + 1);
    const imagem = document.querySelector('[data-imagem]').value;

    conectaApi.addVideo(titulo, descricao, url, imagem);
}

formulario.addEventListener( 'submit', evento => adicionarVideo(evento))