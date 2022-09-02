import { useState, useCallback } from 'react';
// import axios from 'axios'
import './App.css';
import Categories from './components/Categories';
import NewsList from './components/NewsList';


const App = ()=> {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback(category=> setCategory)

  return (
    <>
    {/* <div>
      <div>
      <button onClick={onClick}>불러오기</button>
      </div>
      {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
    </div> */}
    <Categories category={category} onSelect={onSelect}/>
    <NewsList category={category}/>
    </>

  );
}

export default App;
