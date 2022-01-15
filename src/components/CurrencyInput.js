import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class CurrencyInput extends Component {
  render() {
    const { handleChange, currenciesList } = this.props;
    return (
      <label htmlFor="currency">
        Moeda:
        <select
          id="currency"
          name="currency"
          data-testid="currency-input"
          onChange={ handleChange }
        >
          { currenciesList !== undefined && currenciesList.map((currency) => (
            <option key={ currency }>{ currency }</option>
          )) }
        </select>
      </label>
    );
  }
}

const mapStateToProps = (state) => ({
  currenciesList: state.wallet.currencies,
});

CurrencyInput.propTypes = {
  handleChange: PropTypes.func.isRequired,
  currenciesList: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, null)(CurrencyInput);
