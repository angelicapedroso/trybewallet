import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import ValueInput from '../components/ValueInput';
import DescriptionInput from '../components/DescriptionInput';
import CurrencyInput from '../components/CurrencyInput';
import MethodInput from '../components/MethodInput';
import TagInput from '../components/TagInput';
import BtnAdd from '../components/BtnAdd';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      currency: '',
      description: '',
      method: '',
      tag: '',
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { userEmail } = this.props;
    const { value, currency, description, method, tag } = this.state;
    return (
      <main>
        <header>
          <ul>
            <li
              data-testid="email-field"
            >
              { userEmail }
            </li>
            <li
              data-testid="total-field"
            >
              Despesa Total: 0
            </li>
            <li
              data-testid="header-currency-field"
            >
              BRL
            </li>
          </ul>
        </header>
        <form>
          <ValueInput value={ value } handleChange={ this.handleChange } />
          <CurrencyInput currency={ currency } handleChange={ this.handleChange } />
          <MethodInput method={ method } handleChange={ this.handleChange } />
          <TagInput tag={ tag } handleChange={ this.handleChange } />
          <DescriptionInput
            description={ description }
            handleChange={ this.handleChange }
          />
          <BtnAdd />
        </form>
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
});

Wallet.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Wallet);
