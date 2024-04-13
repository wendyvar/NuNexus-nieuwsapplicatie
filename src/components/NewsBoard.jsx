import { useEffect } from "react";
import { useState } from "react";
import NewsItem from "./NewsItem";
import '../index.css';

const NewsBoard = ({category}) => {

    const [articles,setArticles] = useState([]);

    useEffect(()=>{
      let url = `https://newsapi.org/v2/top-headlines?country=nl&category=${category}&apiKey=87b06bf9e4d94dc09cd8ce2f686fad90`;
      fetch(url).then(response=> response.json()).then(data=> setArticles(data.articles));
  }, [category]) // Also, add `category` to the dependency array
  

  return (
    <div className="container mt-3"> {/* Use Bootstrap container for center alignment */}
    <br></br> 
      <h2 className="text-center mb-4">Nieuws</h2>
    
      <div className="row justify-content-center"> {/* Use row and justify-content-center for horizontal centering */}
        {articles.map((news, index) => (
          // Wrap each NewsItem with a column div, or simply render NewsItem if it already handles its column layout.
          <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
        ))}
      </div> {/* This closing div should come after the map function */}
    </div>
  );
  
        };
export default NewsBoard
