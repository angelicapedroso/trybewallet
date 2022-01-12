import { SAVE_EXPENSE } from '../actions';

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
  default:
    return state;
  }
}

export default wallet;
