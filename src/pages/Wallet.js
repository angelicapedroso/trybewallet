import React from 'react';

import Header from '../components/Header';
import ValueInput from '../components/ValueInput';
import DescriptionInput from '../components/DescriptionInput';
import CurrencyInput from '../components/CurrencyInput';
import MethodInput from '../components/MethodInput';
import TagInput from '../components/TagInput';
import BtnAdd from '../components/BtnAdd';

export default class Wallet extends React.Component {
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
          <BtnAdd />
        </form>
      </main>
    );
  }
}
