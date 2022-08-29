import { useState } from 'react';
// import axios from 'axios'
import './App.css';
import NewsList from './components/NewsList';


const App = ()=> {
  // const [data, setData] = useState(null)
  // const onClick = async ()=> {
  //   try {
  //     const response = await axios.get(
  //       'https://newsapi.org/v2/top-headlines?country=kr&apiKey=3ae77db5a80743df8bf855f48c84afd1'
  //     )
  //     .then(response =>{
  //       setData(response.data)
  //     })
  //   } catch(e){
  //     console.log(e)
  //   }
  // }
  

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
