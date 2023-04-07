const config = require('./config');
const NEWS_API = config.NEWS_API;

const fetchData = async () => {
  let articles = [];
    const url = NEWS_API ;
    const response = await fetch(url);
    const data = await response.json();
    
  data.articles.forEach((article) => {
      articles.push(article);
    });
  
    return {
      status: data.status,
      articles: articles
    };
   
  };
  
export default fetchData;
  
 
  


