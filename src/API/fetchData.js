import config from "./config";

const fetchData = async (category) => {
  let url;
  let articles = [];

  switch (category) {
    case "technology":
      url = config.technology;
      break;
    case "cinema":
      url = config.movie;
      break;
    case "sport":
      url = config.sport;
      break;
    case "travel":
      url = config.travel;
      break;
    default:
      url = config.news;
      break;
  }

  const response = await fetch(url);
  const data = await response.json();

  data.articles.forEach((article) => {
    articles.push(article);
  });

  return {
    status: data.status,
    articles: articles,
  };
};

export default fetchData;
