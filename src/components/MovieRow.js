import React from "react";
import "./MovieRow.css";

// 3 receber as props do de "Movierow" tag do APP.js na função
// eslint-disable-next-line import/no-anonymous-default-export
export default ({ title, items }) => {
  console.log(items);
  return (
    <div className="movieRow">
      <h2>{title}</h2>
      <div className="movierow__listarea">
        <div className="movieRow__list">
          const results =
          {items.length > 0 &&
            items.results.map((item, key) => (
              <div key={key} className="movieRow__item">
                <img
                  src={`https://image.tmdb.org/t/p/w300${item.poster_path}`}
                  alt={item.original_title}
                />
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};
