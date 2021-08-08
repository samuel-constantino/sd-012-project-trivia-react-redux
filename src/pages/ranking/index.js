import React from 'react';
import { Link } from 'react-router-dom';

class Ranking extends React.Component {
  render() {
    const ranking = JSON.parse(localStorage.getItem('ranking'));
    return (
      <>
        <h1 data-testid="ranking-title">Ranking</h1>
        {
          ranking.map((player, index) => (
            <div key={ index }>
              <img src={ player.picture } alt={ player.name } />
              <span data-testid={ `player-name-${index}` }>{ player.name }</span>
              <span data-testid={ `palyer-score${index}` }>{ player.score }</span>
            </div>
          ))
        }
        <Link to="/">
          <button data-testid="btn-go-home" type="button">
            Jogar novamente
          </button>
        </Link>
      </>
    );
  }
}

export default Ranking;
