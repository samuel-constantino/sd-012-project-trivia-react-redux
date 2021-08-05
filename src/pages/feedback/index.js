import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Header from '../game/Header';

class Feedback extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      totalScore: props.totalScore,
      totalAssertions: props.totalAssertions,
    };
    this.renderFeedback = this.renderFeedback.bind(this);
  }

  renderFeedback() {
    const scoreToBeat = 3;
    const { totalAssertions } = this.state;
    if (totalAssertions < scoreToBeat) {
      return (
        <p data-testid="feedback-text">Podia ser melhor...</p>
      );
    }
    return (
      <p data-testid="feedback-text">Mandou bem!</p>
    );
  }

  render() {
    const { totalScore, totalAssertions } = this.state;
    return (
      <>
        <Header />
        { this.renderFeedback() }
        <p data-testid="feedback-total-question">
          {totalAssertions}
        </p>
        <p data-testid="feedback-total-score">
          {totalScore}
        </p>
        <Link to="/">
          <button data-testid="btn-play-again" type="button">
            Jogar novamente
          </button>
        </Link>
      </>
    );
  }
}

Feedback.propTypes = {
  totalScore: PropTypes.number,
}.isRequired;

const mapStateToProps = (state) => ({
  totalScore: state.scoreReducer.totalScore,
  totalAssertions: state.scoreReducer.totalAssertions,
});

export default connect(mapStateToProps)(Feedback);
