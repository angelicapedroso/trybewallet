export const SAVE_EMAIL = 'SAVE_EMAIL';
export const SAVE_EXPENSE = 'SAVE_EXPENSE';

export const saveEmail = (email) => ({
  type: SAVE_EMAIL,
  payload: email,
});

export const saveExpense = (value, description, method, tag) => ({
  type: SAVE_EXPENSE,
  payload: { value, description, method, tag },
});
