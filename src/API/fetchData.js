

const apiKey = process.env.REACT_APP_API_KEY;

const config = {
  news: `https://newsapi.org/v2/everything?q=public%20OR%exclusive%20OR%20migrant&apiKey=${apiKey}`,
  crypto: `https://newsapi.org/v2/everything?q=cryptocurrency%20OR%stablecoins%20OR%trading%20OR%bitcoin%20OR%ethereum&apiKey=${apiKey}`,
  technology: `https://newsapi.org/v2/everything?q=technology%20OR%20programming%20OR%ai&apiKey=${apiKey}`,
  gaming: `https://newsapi.org/v2/everything?q=Arcade%20OR%20gaming%20OR%20esport%20OR%20multiplayers&apiKey=${apiKey}`,
};

let allArticles = [];

const fetchData = async (category) => {
  const url = config[category] || config.news;
  const response = await fetch(url);
  const data = await response.json();

  return {
    status: data.status,
    articles: data.articles || [],
  };
};

const updateArticles = (data) => {
  allArticles = [...allArticles, ...data.articles];

  // Sort the articles by published date in descending order
  allArticles.sort((a, b) => new Date(b.publishedAt) - new Date(a.publishedAt));

  // Process and store the fetched articles
  console.log(allArticles);
};

const fetchNewsData = async () => {
  try {
    const newsData = await fetchData("news");
    const cryptoData = await fetchData("crypto");
    const technologyData = await fetchData("technology");
    const gamingData = await fetchData("gaming");

    updateArticles(newsData);
    updateArticles(cryptoData);
    updateArticles(technologyData);
    updateArticles(gamingData);
  } catch (error) {
    console.error("Error fetching news articles:", error);
  }
};

fetchNewsData();

export default fetchData;
