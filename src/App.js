import { div } from 'prelude-ls';
import react, {useEffect} from 'react';
import Tmdb from './Tmdb'



export default () => {

useEffect(()=>{
  const loadAll = async () => {
    //pegando a lista
    let list = await Tmdb.getHomeList();
    console.log(list)
  }
  loadAll();
},[])

  return(
    <div>
      Olá Mundo
    </div>
  )
}