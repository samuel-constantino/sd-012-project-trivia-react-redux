import React from 'react';
import QuestionLayout from './QuestionLayout';
import Header from './Header';

class Game extends React.Component {
  constructor() {
    super();
    this.fetchQuestions = this.fetchQuestions.bind(this);
    this.state = {
      questions: [],
      loading: true,
    };
  }

  componentDidMount() {
    this.fetchQuestions();
  }

  async fetchQuestions() {
    // Precisa pegar o token do redux
    const token = JSON.parse(localStorage.getItem('token'));
    const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}`);
    const { results } = await request.json();
    this.setState({
      questions: [...results],
      loading: false,
    });
  }

  render() {
    const { questions, loading } = this.state;
    if (loading) return (<div>Loading</div>);

    return (
      <>
        <Header />
        <QuestionLayout
          questions={ questions }
        />
      </>
    );
  }
}

export default Game;
