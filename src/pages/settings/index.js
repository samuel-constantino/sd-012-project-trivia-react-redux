import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCategory } from '../../redux/actions/settingActions';
import categories from '../../data';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      categorySelected: '',
    });

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  categoryOptions(category) {
    return {
      value: category,
      label: category,
    };
  }

  handleChange(categorySelected) {
    this.setState((state) => ({
      ...state,
      categorySelected,
    }));
  }

  handleClick() {
    const { categorySelected } = this.state;
    const { setCategoryToStore } = this.props;
    setCategoryToStore(categorySelected.value);
  }

  render() {
    const categoryOptions = categories.map((category) => this.categoryOptions(category));
    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        <Select
          placeholder="Categoria"
          options={ categoryOptions }
          onChange={ this.handleChange }
        />
        <Link to="/">
          <button type="button">
            Voltar
          </button>
        </Link>
        <button
          type="button"
          onClick={ this.handleClick }
        >
          Salvar
        </button>
      </div>
    );
  }
}

Settings.propTypes = {
  setCategoryToStore: PropTypes.func,
}.isRequired;

const mapDispatchToProps = (dispatch) => ({
  setCategoryToStore: (category) => dispatch(setCategory(category)),
});

export default connect(null, mapDispatchToProps)(Settings);
