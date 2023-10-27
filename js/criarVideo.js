import { conectaApi } from "./conectaApi.js";
const formulario = document.querySelector("[data-formulario]");

 async function criarVideo(event){
    event.preventDefault(); //faz com que não atualize a pagina automaticamente
    const imagem = document.querySelector("[data-imagem]").value; //.value pois queremos o que o usuario digitar
    const url = document.querySelector("[data-url]").value;
    const titulo = document.querySelector("[data-titulo]").value;
    const descricao = Math.floor(Math.random() * 10).toString();
    try{
    await conectaApi.criaVideo(titulo,descricao,url,imagem);

    window.location.href = "../pages/envio-concluido.html" //muda p outra tela de sucesso
    } catch(e){
        alert(e)
    }
}

formulario.addEventListener("submit", event => criarVideo(event)); //chama func qnd enviar o formulario