import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory, setDifficulty, setType } from '../../redux/actions/settingActions';
import { categories, difficulty, types } from '../../data';

class Settings extends React.Component {
  categoryOptions(category) {
    return {
      value: category,
      label: category,
    };
  }

  difficultyOptions(diff) {
    return {
      value: diff,
      label: diff,
    };
  }

  typeOptions(type) {
    return {
      value: type.value,
      label: type.label,
    };
  }

  render() {
    const { setCategoryToStore, setDifficultyToStore, setTypeToStore } = this.props;
    const categoryOptions = categories.map((category) => this.categoryOptions(category));
    const typeOptions = types.map((type) => this.typeOptions(type));

    const difficultyOptions = difficulty.map((
      category,
    ) => this.difficultyOptions(category));

    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        <Select
          placeholder="Categoria"
          options={ categoryOptions }
          onChange={ ({ value }) => setCategoryToStore(value) }
        />
        <Select
          placeholder="Dificuldade"
          options={ difficultyOptions }
          onChange={ ({ value }) => setDifficultyToStore(value) }
        />
        <Select
          placeholder="Tipo"
          options={ typeOptions }
          onChange={ ({ value }) => setTypeToStore(value) }
        />
        <Link to="/">
          <button type="button">
            Voltar
          </button>
        </Link>
      </div>
    );
  }
}

Settings.propTypes = {
  setCategoryToStore: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setCategoryToStore: (category) => dispatch(setCategory(category)),
  setDifficultyToStore: (value) => dispatch(setDifficulty(value)),
  setTypeToStore: (type) => dispatch(setType(type)),
});

export default connect(null, mapDispatchToProps)(Settings);
