import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

class Header extends Component {
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
            Despesa Total: 0
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
});

Header.propTypes = {
  userEmail: PropTypes.string.isRequired,
};

export default connect(mapStateToProps, null)(Header);
