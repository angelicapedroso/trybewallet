import { SAVE_EXPENSE, SAVE_CURRENCIES, CURRENCY_KEY } from '../actions';

const INITIAL_STATE = {
  wallet: {
    currencies: [],
    expenses: [{
      id: 0,
      value: '',
      description: '',
      currency: '',
      method: '',
      tag: '',
      exchangeRates: {
        USD: {
          code: 'USD',
          name: 'Dólar Comercial',
          ask: '5.6208',
        },
        CAD: {
          code: 'CAD',
          name: 'Dólar Canadense',
          ask: '4.2313',
        },
      },
    }],
  },
};

function wallet(state = INITIAL_STATE, action) {
  switch (action.type) {
  case SAVE_EXPENSE:
    return {
      ...state,
      expenses: { ...action.payload },
    };
  case SAVE_CURRENCIES:
    return {
      expenses: { ...state.expenses, exchangeRates: { ...action.payload } },
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
