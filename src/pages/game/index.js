import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import QuestionLayout from './QuestionLayout';
import Header from './Header';
import { categories } from '../../data';

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
    const { getCategory, getDifficulty, getType } = this.props;
    let category = '';
    const primeiroIndex = 8;
    categories.forEach((c, index) => {
      if (getCategory !== 'Any Category'
        && c === getCategory) category = `&category=${primeiroIndex + index}`; // esse primeiroIndex precisa ser incrementado porque na API, o index da primeira caregoria é 9 (menos o primeiro índex, 'Any Category, ficando 8 como index inicial)
    });
    // Precisa pegar o token do redux
    const token = JSON.parse(localStorage.getItem('token'));
    const request = await fetch(`https://opentdb.com/api.php?amount=5&token=${token}${category}${getDifficulty}${getType}`);
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

Game.propTypes = {
  getCategory: PropTypes.string,
}.isRequired;

const mapStateToProps = (state) => ({
  getCategory: state.settingReducer.category,
  getDifficulty: state.settingReducer.difficulty,
  getType: state.settingReducer.type,
});

export default connect(mapStateToProps)(Game);
