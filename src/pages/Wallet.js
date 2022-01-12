import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveExpense } from '../actions';

import Header from '../components/Header';
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
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange({ target }) {
    const { name, value } = target;
    this.setState({
      [name]: value,
    });
  }

  handleClick(event) {
    event.preventDefault();
    const { expenseInfo } = this.props;
    const { value, currency, description, method, tag } = this.state;
    const expenseList = { value, currency, description, method, tag };
    expenseInfo(expenseList);
    this.setState({ value: '', currency: '', description: '', method: '', tag: '' });
  }

  render() {
    const { value, currency, description, method, tag } = this.state;
    return (
      <main>
        <Header />
        <form>
          <ValueInput value={ value } handleChange={ this.handleChange } />
          <CurrencyInput currency={ currency } handleChange={ this.handleChange } />
          <MethodInput method={ method } handleChange={ this.handleChange } />
          <TagInput tag={ tag } handleChange={ this.handleChange } />
          <DescriptionInput
            description={ description }
            handleChange={ this.handleChange }
          />
          <BtnAdd handleClick={ this.handleClick } />
        </form>
      </main>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  expenseInfo: (state) => dispatch(saveExpense(state)),
});

Wallet.propTypes = {
  expenseInfo: PropTypes.func.isRequired,
};

export default connect(null, mapDispatchToProps)(Wallet);
