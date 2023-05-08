const apiKey = process.env.REACT_APP_API_KEY;

const config = {
  news: `https://newsapi.org/v2/everything?q=breaking%20OR%exclusive%20OR%20health&apiKey=${apiKey}`,
  crypto: `https://newsapi.org/v2/everything?q=cryptocurrency%20OR%stablecoins%20OR%trading%20OR%bitcoin%20OR%ethereum&apiKey=${apiKey}`,
  technology: `https://newsapi.org/v2/everything?q=technology%20OR%20programming%20OR%ai&apiKey=${apiKey}`,
  travel: `https://newsapi.org/v2/everything?q=tourism%20OR%travel&apiKey=${apiKey}`,
  gaming: `https://newsapi.org/v2/everything?q=Arcade%20OR%20gaming%20OR%20esport%20OR%20multiplayers&apiKey=${apiKey}`,
};

const fetchData = async (category) => {
  const url = config[category] || config.news;
  const response = await fetch(url);
  const data = await response.json();

  return {
    status: data.status,
    articles: data.articles || [],
  };
};

export default fetchData;
