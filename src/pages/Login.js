import React from 'react';

class Login extends React.Component {
  render() {
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            data-testid="email-input"
            placeholder="e-mail"
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            name="password"
            data-testid="password-input"
            placeholder="senha"
          />
        </label>
        <button
          type="submit"
        >
          Entrar
        </button>
      </form>
    );
  }
}

export default Login;
