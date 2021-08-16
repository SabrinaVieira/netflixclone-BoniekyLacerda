//2 - criaçaão do componete MovieRow, que recebe as props title e items --> passadas pelo app.js
import "./MovieRow.css";
import React from "react";

// const filmeFormatItem = {
//   results: [],
// };

// const filmeFormat = {
//   title: String,
//   item: filmeFormatItem,
// };

export default function MovieRow({ item, title }) {
  console.log("Conteudo de Resultado:");
  const resultados = [item.results];
  console.log(resultados);

  // const tamanho = resultados.length;
  // console.log(tamanho); //funcionou
  return (
    <div className="movieRow">
      <h1>{title}</h1>
      {
        //2.1 - A prop item tras um array de objetos, que deve ser mapeado novamente
        //a prop item tem outro array de objetos chamado "results" que contem a lista de filmes
      }
      <div className="movieRow__listArea">
        {resultados.length > 0 &&
          resultados.map((movie, key) => (
            <div
              className="movieRow__item"
              key={key}
              aa={console.log("Conteudo de Movie")}
              a={console.log(movie)}
              vv={console.log(movie.adult)} //nao funciona
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.original_title}
              />
            </div>
          ))}
      </div>
    </div>
  );
}
