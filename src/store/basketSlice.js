import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  totalPrice: 0,
};

const basketSlice = createSlice({
  name: 'basket',
  initialState,
  reducers: {
    addToBasket: (state, action) => {
      const item = state.items.find(item => item.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      state.totalPrice += action.payload.Price;
    },
    removeFromBasket: (state, action) => {
      const itemIndex = state.items.findIndex(item => item.id === action.payload.id);
      if (itemIndex >= 0) {
        const item = state.items[itemIndex];
        state.totalPrice -= item.Price;
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          state.items.splice(itemIndex, 1);
        }
      }
    },
    clearBasket: (state) => {
      state.items = [];
      state.totalPrice = 0;
    },
  },
});

export const { addToBasket, removeFromBasket, clearBasket } = basketSlice.actions;
export default basketSlice.reducer;
