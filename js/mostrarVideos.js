import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");
 //passa como paramentro os valores e espera recebelos
 export default function constroiCard(titulo, descricao, url, imagem){
    const video = document.createElement("li");
    video.className = "videos__item"; //criando li e colocando classe
    video.innerHTML = ` <iframe width="100%" height="72%" src="${url}"
            title="${titulo}" frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}" alt="logo canal alura">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>`

    return video;

}

//criando funçao para retornar a lista de videos da API

async function listaVideo(){
    try{
    const listaApi = await conectaApi.listaVideos();
    //para cada item da lista da API criamos um card(li) que é criado dentro do ul
    listaApi.forEach(element => lista.appendChild(constroiCard(element.titulo, element.descricao, element.url, element.imagem)));
    }catch{
        lista.innerHTML = `<h2 class="mensagem__titulo">ERRO! Nao foi possivel carregar a lista de videos`
    }

}

listaVideo();