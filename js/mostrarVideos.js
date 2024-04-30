import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector('[data-lista]');

function criarCard(titulo, descricao, url, img){
    const li = document.createElement('li');
    li.classList.add('videos__item');

    li.innerHTML = `
    <iframe width="100%" height="72%" src="${url}"
    title="${titulo}" frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowfullscreen></iframe>
    <div class="descricao-video">
        <img src="${img}" alt="logo canal alura">
        <h3>${titulo}</h3>
        <p>${descricao}</p>
    </div>
    `
    return li;
}

async function listaVideos(){
    const listaApi = await conectaApi.listaVideos();

    listaApi.forEach(video => lista.appendChild(
        criarCard(video.titulo, video.descricao, video.url, video.imagem)));
}

listaVideos()

export const mostrarVideos = {
    criarCard
}