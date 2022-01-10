import React from 'react';

class Wallet extends React.Component {
  render() {
    return (
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
    );
  }
}

export default Wallet;
