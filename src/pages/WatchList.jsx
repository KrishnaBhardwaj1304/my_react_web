import React, { useContext } from 'react';
import { WatchlistContext } from '../context/WatchListContext';

function WatchList() {
  const { watchlist, removeFromWatchlist } = useContext(WatchlistContext);

  return (
    <div style={{ padding: '20px' }}>
      <h2>My Watchlist</h2>
      {watchlist.length === 0 ? (
        <p>No movies in your watchlist yet</p>
      ) : (
        <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap' }}>
          {watchlist.map((movie) => (
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
                  src={movie.poster_path || 'https://via.placeholder.com/150'}
                  alt={movie.title}
                  style={{ width: '100%', borderRadius: '6px' }}
                />
                <h3 style={{ fontSize: '16px', margin: '10px 0 5px' }}>{movie.title}</h3>
                <p style={{ margin: '0 0 10px' }}>⭐ {movie.vote_average}</p>
              </div>
              <button type="button" onClick={() => removeFromWatchlist(movie.id)}>
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default WatchList;