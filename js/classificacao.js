export async function getClassificacao() {
    const url = 'http://localhost:8080/v2/acmefilmes/classificacao'
    const response = await fetch(url)
    const filmes = await response.json()
    return classificacao.classificacao
}
export async function postClassificacao(dados) {
    const url = `http://localhost:8080/v2/acmefilmes/insertclassificacao`;
  
    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dados),
    };
    try {
      const response = await fetch(url, options);
      return response.ok;
    } catch (error) {
      console.error('Erro ao enviar classificacao ', error);
    }
}

export async function deleteClassificacao(id) {
    try{
      await fetch(`http://localhost:8080/v2/acmefilmes/classificacao/${id}`, {
        method: 'DELETE',
      });
      console.log('Classificação excluída com sucesso')
    } catch (error) {
      console.error('Erro ao excluir classificação: ', error);
    }
  }

  export async function editClassificacao(id,classificacaoAtualizada) {
    try {
      await fetch(`http://localhost:8080/v2/acmefilmes/atualizarclassificacao/${id}`, {
          method: 'PUT', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(classificacaoAtualizada)
      });
      console.log('Classificação atualizada com sucesso!');
  } catch (error) {
      console.error('Ocorreu um erro ao atualizar a classificação ', error);
  }
  }