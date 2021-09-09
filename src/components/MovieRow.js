//2 - criaçaão do componete MovieRow, que recebe as props title e items --> passadas pelo app.js
import "./MovieRow.css";
import React, { useState } from "react";
import { NavigateBefore, NavigateNext } from "@material-ui/icons";

export default function MovieRow({ title, item }) {
  // const tamanho = resultados.length;
  // console.log(tamanho); //funcionou
  const [scrollx, setScrollx] = useState(-450);

  const handleLeftArrow = () => {
    let x = scrollx + Math.round(window.innerWidth / 2);
    if (x > 0) {
      x = 0;
    }
    setScrollx(x);
  };

  const handleRigthArrow = () => {
    let x = scrollx - Math.round(window.innerWidth / 2);
    let listW =
      item.results !== undefined &&
      item.results.length > 0 &&
      item.results.length * 150;
    if (window.innerWidth - listW > x) {
      x = window.innerWidth - listW - 30;
    }
    setScrollx(x);
  };

  return (
    <div className="movieRow">
      <h1>{title}</h1>
      {
        //2.1 - A prop item tras um array de objetos, que deve ser mapeado novamente
        //a prop item tem outro array de objetos chamado "results" que contem a lista de filmes
      }
      <div className="movieRow__left">
        <NavigateBefore style={{ fontSize: 50 }} onClick={handleLeftArrow} />
      </div>
      <div className="movieRow__rigth">
        <NavigateNext style={{ fontSize: 50 }} onClick={handleRigthArrow} />
      </div>

      <div className="movieRow__listArea">
        <div
          className="movieRow__list"
          style={{
            marginLeft: scrollx,
            width:
              item.results !== undefined &&
              item.results.length > 0 &&
              item.results.length * 150,
          }}
        >
          {item.results !== undefined &&
            item.results.length > 0 &&
            item.results.map((movie, key) => (
              <div className="movieRow__item" key={key}>
                <img
                  src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                  alt={movie.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
}
