import { useEffect } from 'react';
import './App.css';
import { useDispatch,useSelector } from 'react-redux';
import Counter from './feature/counter/Counter';
import { getCatsFetch } from './catState';

function App() {
  const cats=useSelector(state=>state.cats.cats);
  const dispatch=useDispatch();

  useEffect(()=>{
    dispatch(getCatsFetch())
  },[dispatch])
  console.log(cats)
  return (
    <div className="App">
      {/* <Counter/> */}
     {cats.map(cat=>{
       return(
        <div>
       <p>{cat.name}</p>
       <img alt='cats' src={cat.image.url} width='100px' height='100px'/>
      </div>

       )
     })}
    </div>
  );
}

export default App;
