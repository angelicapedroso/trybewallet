import getCurrenciesAPI from '../services/getCurrenciesAPI';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const SAVE_CURRENCY = 'SAVE_CURRENCY';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});

export const saveCurrenciesAPI = (currency) => ({
  type: SAVE_CURRENCY,
  payload: currency,
});

export const fetchCurrenciesAPI = () => async (dispatch) => {
  const response = await getCurrenciesAPI();
  const data = await response;
  dispatch(saveCurrenciesAPI(data));
};
