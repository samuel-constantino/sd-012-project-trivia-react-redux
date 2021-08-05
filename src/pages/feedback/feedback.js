import React from 'react';
import { connect } from 'react-redux';
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
    const { totalScore, totalAssertions } = this.state;
    if (totalAssertions < scoreToBeat) {
      return (
        <div>
          <p data-testid="feedback-text">Podia ser melhor...</p>
          <p data-testid="feedback-total-question">
            {totalAssertions}
          </p>
          <p data-testid="feedback-total-score">
            {totalScore}
          </p>
        </div>
      );
    }
    return (
      <div>
        <p data-testid="feedback-text">Mandou bem!</p>
        <p data-testid="feedback-total-question">
          {totalAssertions}
        </p>
        <p data-testid="feedback-total-score">
          {totalScore}
        </p>
      </div>
    );
  }

  render() {
    return (
      <>
        <Header />
        { this.renderFeedback() }
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
