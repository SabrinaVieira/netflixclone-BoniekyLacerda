import React from 'react';
import './MovieRow.css';

// 3 receber as props do de "Movierow" tag do APP.js na função 
export default ({title, itens})=>{
    return(
        <div>
            <h2>{title}</h2>
            <div className="movierow--listarea">
                {/*4 pegar lista, dar mapping, pegar resultado e dele o comprimento */}
                {/*4 se comprimento da lista "itens.results" for maior que 1, mapeia o "itens.results que recebe item e key <-- não são os mesmos da App.js -poderia ser banana e maça" */}
                {itens.results.length > 0 && itens.results.map((item,key)=>
                // capa do filme
                <img src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}/>
                )}
            </div>
        </div>
    )
};