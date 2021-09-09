import React from "react";
import "./FeatureMovie.css";

export default function FeatureMovie({ itemn }) {
  //4.1 - cria se uma nova data - JavaScript Date instance that represents a single moment in time Date objects contain a Number that represents milliseconds since 1 January 1970 UTC.
  let firstDate = new Date(itemn.first_air_date);
  console.log(firstDate.getFullYear);
  //4.3 - tratando o objeto de generos, colocando cada item dentro de um array
  let genres = [];
  for (let i in itemn.genres) {
    genres.push(itemn.genres[i].name);
  }

  let descr = itemn.overview;
  if (descr.length > 200) {
    descr = descr.substring(0, 200) + "...";
  }

  return (
    <div
      className="feature"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundImage: `url(https://image.tmdb.org/t/p/original${itemn.backdrop_path})`,
      }}
    >
      {/*4.0 - exibindo oas dados do fileme selecionado - percorrendo as chaves dos objeto(s)*/}
      <div className="feature__vertical">
        <div className="feature__horizontal">
          <div className="feature__name">{itemn.original_name}</div>
          <div className="feature__info">
            <div className="feature__points">{itemn.vote_average} pontos</div>
            {/*4.2 - getFullYear é o metodo que pega apenas o ano  data  nova -  according to local time.

*/}
            <div className="feature__year">{firstDate.getFullYear}</div>
            <div className="feature__seasons">
              {itemn.number_of_seasons} temporada
              {itemn.number_of_seasons !== 1 ? "s" : ""}
            </div>
            <div className="feature__description">{descr}</div>
            <div className="feature__buttons">
              <a className="feature__watch_button" href={`/watch/${itemn.id}`}>
                Assistir
              </a>
              <a className="feature__mylist_button" href={`/list/${itemn.id}`}>
                Minha Lista
              </a>
            </div>
            <div className="feature__genres">
              {/* //4.6 -  Join vai juntar as informaçoes do arrei, usando  avirgura como separador*/}
              <strong>Gêneros: {genres.join(", ")}</strong>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
