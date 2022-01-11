import React, { Component } from 'react';

export default class TagInput extends Component {
  render() {
    return (
      <label htmlFor="tag">
        Tag:
        <select
          data-testid="tag-input"
        >
          <option selected="selected" disabled="disabled">Selecionar</option>
          <option value="food">Alimentação</option>
          <option value="leisure">Lazer</option>
          <option value="work">Trabalho</option>
          <option value="transport">Transporte</option>
          <option value="health">Saúde</option>
        </select>
      </label>
    );
  }
}
