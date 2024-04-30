const endPointApi = 'http://localhost:3000/videos';

async function listaVideos(){
    try{
        const api = await fetch(endPointApi);
        let videos = await api.json();
        return videos;
    }catch(error){
        console.log(`Algo deu errado: ${error}`);
    }
}

async function addVideo(titulo, descricao, url, imagem){
    const conexao = await fetch(endPointApi, {
        method: "POST",
        headers: {
            "Content-type":"application/json"
        },
        body: JSON.stringify({
            titulo : titulo,
            descricao : `${descricao}`,
            url : url,
            imagem : imagem
        })
    });

    const conexaoConvertida = await conexao.json();
    return conexaoConvertida;
}

export const  conectaApi = {
    listaVideos,
    addVideo
}