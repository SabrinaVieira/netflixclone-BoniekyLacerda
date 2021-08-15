//1 - Este arquivo vontem todas as requisições à API de Filmes
//1.1 - importar API Key
const API_KEY = "a0dd6ec96df74687fe3eca86f4a688db";
//1.2 - URL que precede todos os endpoints de consulta
const API_BASE = "https://api.themoviedb.org/3/";

/*
- originais da netflix
- recomendados (treading)
- em alta (top rated)
- ação
- comédia
- terror
- romance
- documentários
*/

//1.5 Criação da função auxiliar (basicFetch) que recebe o "endpoint"e da um fetch na url que eu requisito
const basicFetch = async (endpoint) => {
  const req = await fetch(`${API_BASE}${endpoint}`);
  const json = await req.json();
  return json;
};

//1.3 - TMDB.js exporta exporta por padrão um objeto Json gerado pela função asyncrona getHomeList ()
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  //1.4 - getHomelist é uma função (que retorna um array de objetos?) que recebe (atravez da execução da função anonima) um array de objetos
  getHomeList: async () => {
    return [
      //1.6 - dentro de items, chamar a basicFechpassando o endpoint para ser concatenado na API base da requisição
      {
        slug: "originals",
        title: "Originais",
        itemsfilmes: await basicFetch(
          `discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "treading",
        title: "Recomendados para Você",
        itemsfilmes: await basicFetch(
          `treding/all/week?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
      {
        slug: "toprated",
        title: "Em Alta",
        itemsfilmes: await basicFetch(
          `movie/top_rated?with_network=213&language=pt-BR&api_key=${API_KEY}`
        ),
      },
    ];
  },
};
