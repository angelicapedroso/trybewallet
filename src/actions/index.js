import getCurrenciesAPI from '../services/getCurrenciesAPI';

export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';
export const SAVE_CURRENCIES = 'SAVE_CURRENCIES';
export const CURRENCY_KEY = 'CURRENCY_KEY';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const saveExpense = (expense) => ({
  type: SAVE_EXPENSE,
  payload: expense,
});

export const saveCurrenciesAPI = (currency) => ({
  type: SAVE_CURRENCIES,
  payload: currency,
});

export const currencyKey = (key) => ({
  type: CURRENCY_KEY,
  payload: key,
});

export const setExpenses = (expense) => async (dispatch) => {
  const data = await getCurrenciesAPI();
  dispatch(saveExpense({ ...expense, exchangeRates: data }));
};

export const fetchCurrenciesAPI = () => async (dispatch) => {
  const response = await getCurrenciesAPI();
  const data = await response;
  dispatch(saveCurrenciesAPI(data));
  dispatch(currencyKey(Object.keys(data)
    .filter((key) => key !== 'USDT')));
};
