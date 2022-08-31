import { useState } from 'react';
// import axios from 'axios'
import './App.css';
import NewsList from './components/NewsList';


const App = ()=> {
  return (
    // <div>
    //   <div>
    //     <button onClick={onClick}>불러오기</button>
    //   </div>
    //   {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} /> }
    // </div>
    <NewsList/>
  );
}

export default App;
