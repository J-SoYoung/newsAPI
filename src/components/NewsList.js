import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = ({category})=> {

  const [articles, setArticles] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(()=>{
    //async 사용하는 함수 선언
    const fetchData = async ()=> {
      setLoading(true)
      try{
        const query = category === 'all'? "" : `&category=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=3ae77db5a80743df8bf855f48c84afd1`
        )
        console.log(response)
        setArticles(response.data.articles)
      }catch(e){
        console.log(e)
      }
      // news 로딩이 끝나면 false값으로 바꿔주기
      setLoading(false) 
    }
    // useEffect에서 사용할 진짜 함수!!
    fetchData()
  },[category])

  
  // 대기중화면
  if(loading){
    return (<NewsListBlock>대기중</NewsListBlock>);
  }
  // article값이 없을때
  if(!articles){
    return null
  }
  return (
    <>
      <NewsListBlock>
        {articles.map(article => (
          <NewsItem key={article.url} article={article}/>
        ))}
      </NewsListBlock>
    </>
  )
};

const NewsListBlock = styled.div`
  box-sizing : border-box;
  padding-bottom : 3rem;
  width : 768px;
  margin : 0 auto;
  margin-top : 2rem;
  @media screen and (max-width : 768px){
    width: 100%;
    padding-left : 1rem;
    padding-right : 1rem;
  }
`
const sampleArticle = {
  title : '제목',
  description : '내용',
  url : 'http://google.com',
  urlToImage : 'https://via.placeholder.com/160'
};


export default NewsList;