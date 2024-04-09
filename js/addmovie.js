const idFilmeAtual = new URLSearchParams(window.location.search).get('id');
console.log(idFilmeAtual)

import { postFilme, getFilmes } from "./filmes.js"

const listaFilmes = await getFilmes()

listaFilmes.forEach(filme => {

    if(filme.id == idFilmeAtual){
        console.log(filme)    
    }
});

        const tituloCampo = document.getElementById('titulo')
        const sinopseCampo = document.getElementById('sinopse')
        const lancamentoCampo = document.getElementById('lancamento')
        const relancamentoCampo = document.getElementById('relancamento')
        const precoCampo = document.getElementById('preco')
        const duracaoCampo = document.getElementById('duracao')
        const fotoCampo = document.getElementById('foto')

    document.getElementById('botaoAdicionarFilme').addEventListener('click',()=>{
        const titulo = tituloCampo.value
        const sinopse = sinopseCampo.value
        const lancamento = lancamentoCampo.value
        const relancamento = relancamentoCampo.value
        const preco = precoCampo.value
        const duracao = duracaoCampo.value
        const foto = fotoCampo.value

        if(titulo == ''||sinopse == ''||lancamento==''||duracao==''||foto==''){
            alert("Informações faltando")
        } else {
            const infos= {
                nome: titulo,
                sinopse,
                duracao,
                data_lancamento: lancamento,
                data_relancamento: relancamento,
                foto_capa: foto,
                valor_unitario: preco
            }
            postFilme(infos)
        }
    }
)