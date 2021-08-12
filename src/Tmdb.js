const API_KEY = 'a0dd6ec96df74687fe3eca86f4a688db';
const API_BASE = 'https://api.themoviedb.org/3/';

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

//dar um fetch na url que eu quero pegar e retornar um json
const basicFatch = async(endpoint) =>{
    const req = await fetch(`${API_BASE}${endpoint}`);
    const json = await req.json();
    return json
}


export default {
    getHomeList: async () => {
        return [
        {
            slug: 'originals',
            title: 'Originais do Netflix',
            itens: await basicFatch(`discover/tv?with_network=213&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'treading',
            title: 'Recomendados para você',
            itens: await basicFatch(`treading/all/week?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'toprated',
            title: 'Em alta',
            itens: await basicFatch(`movie/top_rated/?language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'action',
            title: 'Ação',
            itens: await basicFatch(`discover/movie?with_genres=28&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'comedy',
            title: 'Comédia',
            itens: await basicFatch(`discover/movie?with_genres=35&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'horror',
            title: 'Terror',
            itens: await basicFatch(`discover/movie?with_genres=27&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'romance',
            title: 'Romance',
            itens: await basicFatch(`discover/movie?with_genres=10749&language=pt-BR&api_key=${API_KEY}`)
        },
        {
            slug: 'documentary',
            title: 'Documentario',
            itens: await basicFatch(`discover/movie?with_genres=99&language=pt-BR&api_key=${API_KEY}`)
        },
        ];
    }
}