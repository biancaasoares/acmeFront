export async function getGenero() {
    const url = 'http://localhost:8080/v2/acmeFilmes/genero/'
    const response = await fetch(url)
    const filmes = await response.json()
    return genero.genero
}
export async function postGenero(dados) {
    const url = `http://localhost:8080/v2/acmeFilmes/insert`;
  
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
      console.error('Erro ao enviar gênero ', error);
    }
}

export async function deleteGenero(id) {
    try{
      await fetch(`http://localhost:8080/v2/acmeFilmes/genero/${id}`, {
        method: 'DELETE',
      });
      console.log('Gênero excluído com sucesso')
    } catch (error) {
      console.error('Erro ao excluir gênero: ', error);
    }
  }

  export async function editGenero(id,generoAtualizado) {
    try {
      await fetch(`http://localhost:8080/v2/acmeFilmes/genero/${id}`, {
          method: 'PUT', 
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(generoAtualizado)
      });
      console.log('Gênero atualizado com sucesso!');
  } catch (error) {
      console.error('Ocorreu um erro ao atualizar o gênero ', error);
  }
  }