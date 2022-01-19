import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
  constructor() {
    super();
    this.sumExpenses = this.sumExpenses.bind(this);
  }

  sumExpenses() {
    const { expenses } = this.props;
    return expenses.reduce((acc, curr) => {
      acc += (
        curr.value * curr.exchangeRates[curr.currency].ask);
      return acc;
    }, 0);
  }

  render() {
    const { userEmail } = this.props;
    return (
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
            Despesa Total:
            {this.sumExpenses().toFixed(2)}
          </li>
          <li
            data-testid="header-currency-field"
          >
            BRL
          </li>
        </ul>
      </header>
    );
  }
}

const mapStateToProps = (state) => ({
  userEmail: state.user.email,
  expenses: state.wallet.expenses,
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
  expenses: PropTypes.arrayOf.isRequired,
};

export default connect(mapStateToProps, null)(Header);
