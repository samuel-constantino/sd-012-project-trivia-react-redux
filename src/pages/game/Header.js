import React from 'react';
import PropTypes from 'prop-types';
import md5 from 'crypto-js/md5';
import { connect } from 'react-redux';

class Header extends React.Component {
  render() {
    const { name, email, totalScore } = this.props;
    return (
      <header>
        <div>
          <img src={ `https://www.gravatar.com/avatar/${md5(email).toString()}` } alt={ name } data-testid="header-profile-picture" />
          <label htmlFor="user-name">
            Jogador:
            <span id="user-name" data-testid="header-player-name">{ name }</span>
          </label>
        </div>
        <div>
          Pontos:
          <span data-testid="header-score">
            {totalScore}
          </span>
        </div>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  email: state.userReducer.user.email,
  name: state.userReducer.user.name,
  totalScore: state.scoreReducer.totalScore,
});

Header.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
}.isRequired;

export default connect(mapStateToProps)(Header);
