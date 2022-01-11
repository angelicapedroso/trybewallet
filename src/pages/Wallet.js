import React from 'react';

import ValueInput from '../components/ValueInput';
import DescriptionInput from '../components/DescriptionInput';
import CurrencyInput from '../components/CurrencyInput';
import MethodInput from '../components/MethodInput';
import TagInput from '../components/TagInput';
import BtnAdd from '../components/BtnAdd';

class Wallet extends React.Component {
  render() {
    return (
      <main>
        <header>
          <ul>
            <li>E-mail</li>
            <li
              data-testid="total-field"
            >
              Despesa Total: 0
            </li>
            <li>BRL</li>
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

export default Wallet;
