import React from 'react';

class Login extends React.Component {
  constructor() {
    super();
    this.formHandler = this.formHandler.bind(this);
    this.state = {
      email: '',
      name: '',
    };
  }

  formHandler({ target }) {
    this.setState({
      [target.name]: target.value,
    });
  }

  render() {
    const { email, name } = this.state;
    return (
      <form>
        <label htmlFor="input-player-name">
          Nome
          <input
            value={ name }
            onChange={ (e) => this.formHandler(e) }
            name="name"
            type="text"
            data-testid="input-player-name"
          />
        </label>
        <label htmlFor="input-gravatar-email">
          Email
          <input
            onChange={ (e) => this.formHandler(e) }
            value={ email }
            name="email"
            type="text"
            data-testid="input-gravatar-email"
          />
        </label>
        <button disabled={ !(email && name) } type="button" data-testid="btn-play">
          Jogar
        </button>
      </form>
    );
  }
}

export default Login;
