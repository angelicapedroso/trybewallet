import { SAVE_EXPENSE, SAVE_CURRENCIES, CURRENCY_KEY } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
  exchangeRates: [],
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: [...state.expenses, action.payload],
    };
  case SAVE_CURRENCIES:
    return {
      ...state,
      exchangeRates: [action.payload],
    };
  case CURRENCY_KEY:
    return {
      ...state,
      currencies: action.payload,
    };
  default:
    return state;
  }
}

export default wallet;
