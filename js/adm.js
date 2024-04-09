'use strict';
import { getFilmes, deleteFilme, editFilme } from "./filmes.js";

const listaFilmes = await getFilmes();

function criarCard(info){
    const container = document.getElementById('containerFilmes');

    const filme = document.createElement('tr');
    const titulo = document.createElement('td');
    titulo.textContent = info.nome;
    const preco = document.createElement('td');
    preco.textContent = info.valor_unitario;
    const botoes = document.createElement('td');
    const botaoEdit = document.createElement('button');
    botaoEdit.classList.add('btn', 'edit-btn');
    botaoEdit.textContent = 'Editar';
    const botaoDel = document.createElement('button');
    botaoDel.classList.add('btn', 'delete-btn');
    botaoDel.textContent = 'Excluir';

    botoes.appendChild(botaoEdit);
    botoes.appendChild(botaoDel);
    filme.appendChild(titulo);
    filme.appendChild(preco);
    filme.appendChild(botoes);
    container.appendChild(filme);

    botaoEdit.addEventListener('click',()=>{
        window.location.href='../html/addmovie.html?id='+info.id    
    })
    
    botaoDel.addEventListener('click',()=>{
        deleteFilme(info.id)
        window.location.reload()
    })
}

listaFilmes.forEach(filme => {
    criarCard(filme);
});
