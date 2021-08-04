import React from 'react';
import PropTypes from 'prop-types';

class QuestionLayout extends React.Component {
  render() {
    const { questions } = this.props;
    return (
      <>
        <h1 data-testid="question-category">{questions[0].category}</h1>
        <p data-testid="question-text">{questions[1].question}</p>
        <button
          type="button"
          data-testid="correct-answer"
        >
          {questions[0].correct_answer}

        </button>
        {
          questions[0].incorrect_answers
            .map((e, index) => (
              <button data-testid={ `wrong-answer-${index}` } type="button" key={ e }>
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
