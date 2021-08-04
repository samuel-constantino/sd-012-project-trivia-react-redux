import React from 'react';
import PropTypes from 'prop-types';
import NextButton from './nextButton';

class QuestionLayout extends React.Component {
  constructor() {
    super();
    this.checkAnswer = this.checkAnswer.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      correct: '',
      wrong: '',
      question: 0,
      hidden: true,
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
      hidden: false,
    });
  }

  handleClick() {
    this.setState((state) => ({
      ...state,
      question: state.question + 1,
      hidden: true,
      correct: '',
      wrong: '',
    }));
  }

  render() {
    const { correct, wrong, hidden, question, timeCount } = this.state;
    const { questions } = this.props;
    return (
      <>
        <h1 data-testid="question-category">{questions[question].category}</h1>
        <p data-testid="question-text">{questions[question].question}</p>
        <span>{timeCount}</span>
        <button
          className={ correct }
          type="button"
          data-testid="correct-answer"
          onClick={ this.checkAnswer }
          disabled={ timeCount === 0 || this.handleDisableButtons() }
        >
          {questions[question].correct_answer}

        </button>
        {
          questions[question].incorrect_answers
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
        <NextButton
          onClick={ this.handleClick }
          hidden={ hidden }
        />
      </>
    );
  }
}

QuestionLayout.propTypes = {
  questions: PropTypes.arrayOf(Object).isRequired,
};

export default QuestionLayout;
