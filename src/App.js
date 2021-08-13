import { div } from "prelude-ls";
import { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import "./App.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  const [moveList, setMoveList] = useState([]);

  useEffect(() => {
    const loadAll = async () => {
      //pegando a lista
      let list = await Tmdb.getHomeList();
      setMoveList(list);
      console.log(list);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <section className="Lists">
        {moveList.map((item, key) => (
          <MovieRow key={key} title={item.title} items={item.items} />
        ))}
      </section>
    </div>
  );
};
