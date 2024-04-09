export async function getFilmes() {
    const url = 'http://localhost:8080/v2/acmefilmes/filmes'
    const response = await fetch(url)
    const filmes = await response.json()
    return filmes.filmes
}
export async function postFilme(dados) {
    const url = `http://localhost:8080/v2/acmefilmes/filme`;
  
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
      console.error('Erro ao enviar filme: ', error);
    }
}

export async function deleteFilme(id) {
    try{
      await fetch(`http://localhost:8080/v2/acmefilmes/filme/${id}`, {
        method: 'DELETE',
      });
      console.log('Filme excluído com sucesso')
    } catch (error) {
      console.error('Erro ao excluir filme: ', error);
    }
  }

  export async function editFilme(id,filmeAtualizado) {
    try {
      await fetch(`http://localhost:8080/v2/acmefilmes/filme/${id}`, {
          method: 'PUT', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(filmeAtualizado)
      });
      console.log('Filme substituído com sucesso!');
  } catch (error) {
      console.error('Ocorreu um erro ao substituir o filme: ', error);
  }
  }