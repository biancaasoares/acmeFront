const idGeneroAtual = new URLSearchParams(window.location.search).get('id');
console.log(idGeneroAtual)

import { postGenero, getGenero } from "./genero.js"

const listarGenero = await getGenero()

listarGenero.forEach(genero => {

    if(genero.id == idGeneroAtual){
        console.log(genero)    
    }
});

      
        const nomeCampo = document.getElementById('nome')
      

    document.getElementById('botaoAdicionarGenero').addEventListener('click',()=>{
       
        const nome = nomeCampo.value
      

        if(nome == ''){
            alert("Informações faltando")
        } else {
            const infos= {
                nome: nome,
            
                
            }
            postGenero(infos)
        }
    }
)