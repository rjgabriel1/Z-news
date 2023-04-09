import config from "./config";

const fetchData = async (category) => {
  let url;
  let articles = [];

  switch (category) {
    case "Technology":
      url = config.technology;
      break;
    case "Cinema":
      url = config.movie;
      break;
    case "Sport":
      url = config.sport;
      break;
    default:
      url = config.everything;
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
