import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { saveEmail } from '../actions';

class Login extends React.Component {
  constructor() {
    super();

    this.state = {
      email: '',
      password: '',
      disabled: true,
      redirect: false,
    };

    this.validateInputs = this.validateInputs.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    }, () => {
      this.validateInputs();
    });
  }

  handleClick(event) {
    const { loginInfo } = this.props;
    const { email } = this.state;
    event.preventDefault();
    this.setState({
      redirect: true,
    });
    loginInfo(email);
  }

  validateInputs() {
    const { email, password } = this.state;
    const SIX = 6;
    const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (email.match(regex) && password.length >= SIX) {
      return this.setState({ disabled: false });
    } return this.setState({ disabled: true });
  }
  // validation reference with regex: https://www.ti-enxame.com/pt/javascript/validacao-de-e-mail-de-expressao-regular-em-javascript/957575053/

  render() {
    const { email, password, disabled, redirect } = this.state;
    return (
      <form>
        <label htmlFor="email">
          <input
            type="text"
            name="email"
            data-testid="email-input"
            placeholder="e-mail"
            value={ email }
            onChange={ this.handleChange }
          />
        </label>
        <label htmlFor="password">
          <input
            type="text"
            name="password"
            data-testid="password-input"
            placeholder="senha"
            value={ password }
            onChange={ this.handleChange }
          />
        </label>
        <button
          type="submit"
          disabled={ disabled }
          onClick={ this.handleClick }
        >
          Entrar
        </button>
        { redirect && <Redirect to="/carteira" /> }
      </form>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  loginInfo: (email) => dispatch(saveEmail(email)),
});

Login.propTypes = {
  loginInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
