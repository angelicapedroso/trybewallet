import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class TagInput extends Component {
  render() {
    const { tag, handleChange } = this.props;
    return (
      <label htmlFor="tag-id">
        Tag:
        <select
          id="tag-id"
          name="tag"
          data-testid="tag-input"
          value={ tag }
          onChange={ handleChange }
        >
          <option value="Alimentação">Alimentação</option>
          <option value="Lazer">Lazer</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Transporte">Transporte</option>
          <option value="Saúde">Saúde</option>
        </select>
      </label>
    );
  }
}

TagInput.propTypes = {
  tag: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
};
