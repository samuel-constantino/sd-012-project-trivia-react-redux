import React from 'react';
import Select from 'react-select';
import { Link } from 'react-router-dom';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = ({
      categoryOptions: [
        { value: 'Any Difficulty', label: 'Any Difficulty' },
      ],
    });
  }

  render() {
    const { categoryOptions } = this.state;
    return (
      <div>
        <h1 data-testid="settings-title">Configurações</h1>
        <Select
          placeholder="Categoria"
          options={ categoryOptions }
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

export default Settings;
