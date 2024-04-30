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

export const  conectaApi = {
    listaVideos
}