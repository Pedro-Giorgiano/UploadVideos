import { conectaApi } from "./conectaApi.js";
import constroiCard from "./mostrarVideos.js";

async function buscarVideo(event){
    event.preventDefault();
    
    const dadosPesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaApi.buscaVideo(dadosPesquisa);

    const lista = document.querySelector("[data-lista]")

    //apaga todos os elementos da lista
    while(lista.firstChild ){
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(element => lista.appendChild(
        constroiCard(element.titulo, element.descricao, element.url, element.imagem)));

    if(busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo"> Não existem vídeos com este termo!</h2>`
    }

}
const btnPesquisa = document.querySelector("[data-btn-pesquisa]");

btnPesquisa.addEventListener("click", event => buscarVideo(event));
