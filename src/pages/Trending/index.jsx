import React, { useEffect, useState } from 'react';
import Gif from '../../components/Gif';
import config from '../../util/config';

export default function Trending() {
  const [trendingGifs, setTrendingGifs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getTrendingGifs = async () => {
      const GIPHY_KEY = process.env.REACT_APP_GIPHY_KEY;

      const gifs = await fetch(
        `${config.GIPHY_BASE_URL}/gifs/trending?api_key=${GIPHY_KEY}`
      ).then((response) => response.json());

      setTrendingGifs(gifs.data);
      setLoading(false);
    }

    getTrendingGifs();
  }, []);
  

  return (
    <div className="container">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="gifs">
          {trendingGifs.map((gif) => (
            <Gif
              key={gif.id}
              url={gif.images.original.url}
              title={gif.title}
            />
          ))}
        </div>
      )}
      
    </div>
  )
}