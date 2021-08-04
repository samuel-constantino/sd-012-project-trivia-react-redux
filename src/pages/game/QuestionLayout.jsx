import React from 'react';
import PropTypes from 'prop-types';

class QuestionLayout extends React.Component {
  constructor() {
    super();
    this.checkAnswer = this.checkAnswer.bind(this);
    this.state = {
      correct: '',
      wrong: '',
    };
  }

  checkAnswer() {
    this.setState({
      correct: 'correct',
      wrong: 'wrong',
    });
  }

  render() {
    const { correct, wrong } = this.state;
    const { questions } = this.props;
    return (
      <>
        <h1 data-testid="question-category">{questions[0].category}</h1>
        <p data-testid="question-text">{questions[1].question}</p>
        <button
          className={ correct }
          type="button"
          data-testid="correct-answer"
          onClick={ this.checkAnswer }
        >
          {questions[0].correct_answer}

        </button>
        {
          questions[0].incorrect_answers
            .map((e, index) => (
              <button
                className={ wrong }
                data-testid={ `wrong-answer-${index}` }
                type="button"
                key={ e }
                onClick={ this.checkAnswer }
              >
                {e}
              </button>))
        }
      </>
    );
  }
}

QuestionLayout.propTypes = {
  questions: PropTypes.arrayOf(Object).isRequired,
};

export default QuestionLayout;
