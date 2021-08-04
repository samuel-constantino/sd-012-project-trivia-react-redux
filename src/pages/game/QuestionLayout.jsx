import React from 'react';
import PropTypes from 'prop-types';

class QuestionLayout extends React.Component {
  constructor() {
    super();
    this.state = {
      correct: '',
      wrong: '',
      showNextButton: false,
      timeCount: 30,
    };
    this.checkAnswer = this.checkAnswer.bind(this);
    this.timeCounter = this.timeCounter.bind(this);
    this.handleDisableButtons = this.handleDisableButtons.bind(this);
  }

  // faz o contador de 30 sec começar somente após a montagem:
  componentDidMount() {
    this.timeCounter();
  }

  // não deixa o contador baixar de zero:
  shouldComponentUpdate(nextProps, nextState) {
    const { timeCount } = this.state;
    nextState = 0;
    return (timeCount > nextState);
  }

  // reseta o temporizador na desmontagem da página:
  componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  // função que deve setar o contador de 30 segundos para responder a pergunta:
  timeCounter() {
    const intervalTimer = 1000;
    this.myInterval = setInterval(() => {
      this.setState((prevState) => ({
        timeCount: prevState.timeCount - 1,
      }));
    }, intervalTimer);
  }

  handleDisableButtons() {
    const { showNextButton } = this.state;
    if (showNextButton) {
      return true;
    }
    return false;
  }

  checkAnswer() {
    this.setState({
      correct: 'correct',
      wrong: 'wrong',
    });
  }

  render() {
    const { correct, wrong, timeCount } = this.state;
    const { questions } = this.props;
    return (
      <>
        <h1 data-testid="question-category">{questions[0].category}</h1>
        <p data-testid="question-text">{questions[0].question}</p>
        <span>{timeCount}</span>
        <button
          className={ correct }
          type="button"
          data-testid="correct-answer"
          onClick={ this.checkAnswer }
          disabled={ timeCount === 0 || this.handleDisableButtons() }
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
                disabled={ timeCount === 0 || this.handleDisableButtons() }
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
