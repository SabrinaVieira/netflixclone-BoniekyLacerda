import "./App.css";
import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";

function App() {
  //1.8 - usar  um estado para receber o array de objetos
  const [movieList, setMovieList] = useState([]);
  console.log(movieList);
  //1.6 - usar a funçaõ getHomeList de Tmdb.js pra carregar tudo toda vez que a pag for atualizada
  useEffect(() => {
    const loadAll = async () => {
      //1.7 - Pegando a Lista  (arrey de objetos)
      let list = await Tmdb.getHomeList();
      //1.8
      setMovieList(list);
      console.log(list);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="list">
        {
          //1.9 - Mapear o array de objetos recebidos no state movielist
          movieList.map((item, key) => (
            <div>{item.title}</div>
          ))
        }
      </section>
    </div>
  );
}

export default App;
