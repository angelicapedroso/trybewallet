import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class BtnAdd extends Component {
  render() {
    const { handleClick } = this.props;
    return (
      <button
        type="submit"
        onClick={ handleClick }
      >
        Adicionar despesa
      </button>
    );
  }
}

BtnAdd.propTypes = {
  handleClick: PropTypes.func.isRequired,
};
