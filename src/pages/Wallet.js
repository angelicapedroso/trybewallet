import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpense, fetchCurrenciesAPI } from '../actions';

import Header from '../components/Header';
import ValueInput from '../components/ValueInput';
import DescriptionInput from '../components/DescriptionInput';
import CurrencyInput from '../components/CurrencyInput';
import MethodInput from '../components/MethodInput';
import TagInput from '../components/TagInput';
import BtnAdd from '../components/BtnAdd';
import Table from '../components/Table';

class Wallet extends React.Component {
  constructor() {
    super();

    this.state = {
      expenses: {
        id: 0,
        value: '',
        currency: 'USD',
        description: '',
        method: '',
        tag: '',
        exchangeRates: [],
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    const { fetchCurrencies } = this.props;
    fetchCurrencies();
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState((prevState) => ({
      expenses: {
        ...prevState.expenses,
        [name]: value,
      },
    }));
  }

  handleClick(event) {
    event.preventDefault();
    const { expenseInfo, fetchCurrencies, allCurrencies } = this.props;
    const { expenses } = this.state;
    fetchCurrencies();
    this.setState((prevState) => ({
      expenses: {
        id: prevState.id + 1,
        value: 0,
        currency: 'USD',
        description: '',
        method: '',
        tag: '',
      },
    }));
    expenseInfo({ ...expenses, exchangeRates: allCurrencies[0] });
  }

  // reference: https://www.ti-enxame.com/pt/reactjs/incrementando-o-valor-do-estado-por-um-usando-react/829633222/

  render() {
    const { value, description, method, tag } = this.state;
    return (
      <main>
        <Header />
        <form>
          <ValueInput value={ value } handleChange={ this.handleChange } />
          <CurrencyInput handleChange={ this.handleChange } />
          <MethodInput method={ method } handleChange={ this.handleChange } />
          <TagInput tag={ tag } handleChange={ this.handleChange } />
          <DescriptionInput
            description={ description }
            handleChange={ this.handleChange }
          />
          <BtnAdd handleClick={ this.handleClick } />
        </form>
        <Table />
      </main>
    );
  }
}

const mapStateToProps = (state) => ({
  allCurrencies: state.wallet.exchangeRates,
});

const mapDispatchToProps = (dispatch) => ({
  expenseInfo: (state) => dispatch(saveExpense(state)),
  fetchCurrencies: (state) => dispatch(fetchCurrenciesAPI(state)),
});

Wallet.propTypes = {
  expenseInfo: PropTypes.func.isRequired,
  fetchCurrencies: PropTypes.func.isRequired,
  allCurrencies: PropTypes.func.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Wallet);
