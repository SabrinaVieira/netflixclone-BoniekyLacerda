import { div } from 'prelude-ls';
import  {useEffect, useState} from 'react';
import Tmdb from './Tmdb';
import MovieRow from './components/MovieRow';



export default () => {

  const [moveList, setMoveList]=useState([]);

useEffect(()=>{
  const loadAll = async () => {
    //pegando a lista
    let list = await Tmdb.getHomeList();
    setMoveList(list);
    console.log(list);
  }
  loadAll();
},[])

  return(
    <div className="page">
      {/* Header
      Destaque
      Listas
      Rodapé */}
      <section className="Lists">
        {moveList.map((item,key)=>(
          /*1 {item.title}
            criar componente para exibir a lista */
          <div> 
            {/*2 passando duas props: tile e item --> setadas no TMDB files e acessadas pelo mapping no state "moveList"  da requisção na const "list" */}
            <MovieRow key={key} title={item.title} items={item.itens}/>
          </div>
        ))}
      </section>
    </div>
  );
}