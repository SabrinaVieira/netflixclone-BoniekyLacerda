import "./App.css";
import React, { useEffect, useState } from "react";
import Tmdb from "./Tmdb";
import MovieRow from "./components/MovieRow";
import FeatureMovie from "./components/FeatureMovie";
import Header from "./components/Header";

function App() {
  //3 - criar um estado especifico para o filme de destaque
  const [featureData, setFeatureData] = useState(null);
  //1.8 - usar  um estado para receber o array de objetos
  const [movieList, setMovieList] = useState([]);
  const [darkHeader, setDarkHeader] = useState(false);

  //1.6 - usar a funçaõ getHomeList de Tmdb.js pra carregar tudo toda vez que a pag for atualizada
  useEffect(() => {
    const loadAll = async () => {
      //1.7 - Pegando a Lista  (arrey de objetos)
      let list = await Tmdb.getHomeList();
      //1.8
      setMovieList(list);

      //3.2 Pegando o FeatureData atraves da função filter que só pega o item desse array no qual o slug = originals
      let originals = list.filter((i) => i.slug === "originals");
      //3.3 escolhe um numero (index/posição) aleatoria da lista de originals //Não entendi o " originals[0]"//INFERNO
      let ramdomChosen = Math.floor(
        Math.random() * (originals[0].itemsfilmes.results.length - 1)
      );
      //3.4 montando os parametros (caminho dentro do obj) para pegar os dados so filme
      let chosen = originals[0].itemsfilmes.results[ramdomChosen];
      //3.6 Requisitando os dados e jogando dentro da variavel chosenInfo
      let chosenInfo = await Tmdb.getMovieInfo(chosen.id, "tv");
      //3.7 - passar as informações para o state - atualiza a cada refresh da pag
      setFeatureData(chosenInfo);
    };
    loadAll();
  }, []);

  return (
    <div className="page">
      <Header dark={darkHeader} />
      {
        //3.1 - irá exibir o componet MovieFeatyre somente quando o state "featureData" estiver preenchido
        featureData && <FeatureMovie item={featureData} />
      }

      <section className="list">
        {
          //1.9 - Mapear o array de objetos recebidos no state movielist
          movieList.map((item, key) => (
            <MovieRow
              key="key"
              title={item.title}
              item={item.itemsfilmes} //imprime as chaves
            />
          ))
        }
      </section>

      {movieList.length <= 0 && (
        <div className="loading">
          <img
            src="https://cdn.lowgif.com/small/0534e2a412eeb281-the-counterintuitive-tech-behind-netflix-s-worldwide.gif"
            alt="loading"
          ></img>
        </div>
      )}
    </div>
  );
}

export default App;
