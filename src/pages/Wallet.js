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
  render() {
    const { userEmail } = this.props;
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
          <ValueInput />
          <CurrencyInput />
          <MethodInput />
          <TagInput />
          <DescriptionInput />
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
