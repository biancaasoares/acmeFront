const idClassificacaoAtual = new URLSearchParams(window.location.search).get('id');
console.log(idClassificacaoAtual)

import { postClassificacao, getClassificacao } from "./classicacao.js"

const listarClassificacao = await getClassificacao()

listarClassificacao.forEach(classificacao => {

    if(classificacao.id == idClassificacaoAtual){
        console.log(classificacao)    
    }
});

        const siglaCampo = document.getElementById('sigla')
        const nomeCampo = document.getElementById('nome')
        const descricaoCampo = document.getElementById('descricao')
        const iconeCampo = document.getElementById('icone')

    document.getElementById('botaoAdicionarClassificacao').addEventListener('click',()=>{
        const sigla = siglaCampo.value
        const nome = nomeCampo.value
        const descricao = descricaoCampo.value
        const icone = iconeCampo.value

        if(sigla == ''||nome == ''||descricao==''||icone==''){
            alert("Informações faltando")
        } else {
            const infos= {
                sigla: sigla,
                nome,
                descricao,
                icone: foto,
                
            }
            postClassificacao(infos)
        }
    }
)
