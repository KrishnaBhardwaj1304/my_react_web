import React, { useState, useEffect, useContext } from 'react';
import { WatchlistContext } from '../context/WatchListContext';

function MoviesList() {
  const { watchlist, addToWatchlist } = useContext(WatchlistContext);
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.tvmaze.com/shows')
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.slice(0, 16));
        setLoading(false);
      })
      .catch((err) => {
        console.error('Error fetching data:', err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div style={{ padding: '20px' }}>Loading movies...</div>;

  return (
    <div style={{ padding: '20px' }}>
      <h2>Popular Movies & Shows</h2>
      <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
        {movies.map((movie) => {
          const isAdded = watchlist.some((item) => item.id === movie.id);

          return (
            <div
              key={movie.id}
              style={{
                border: '1px solid #ccc',
                padding: '15px',
                borderRadius: '8px',
                width: '180px',
                display: 'flex',
                flexDirection: 'column',
                justify: 'space-between'
              }}
            >
              <div>
                <img
                  src={movie.image?.medium || 'https://via.placeholder.com/150'}
                  alt={movie.name}
                  style={{ width: '100%', borderRadius: '6px' }}
                />
                <h3 style={{ fontSize: '16px', margin: '10px 0 5px' }}>{movie.name}</h3>
                <p style={{ margin: '0 0 10px' }}>⭐ {movie.rating?.average || 'N/A'}</p>
              </div>

              <button
                type="button"
                onClick={() =>
                  addToWatchlist({
                    id: movie.id,
                    title: movie.name,
                    poster_path: movie.image?.medium,
                    vote_average: movie.rating?.average || 'N/A'
                  })
                }
                disabled={isAdded}
              >
                {isAdded ? 'In Watchlist' : 'Add to Watchlist'}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MoviesList;