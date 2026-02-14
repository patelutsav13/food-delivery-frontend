import { createSlice } from "@reduxjs/toolkit";
import { api } from "../services/api";

const initialState = {
  items: [],
  userId: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    setUserId(state, action) {
      state.userId = action.payload;
    },
    setCartItems(state, action) {
      state.items = action.payload;
    },
    addItem(state, action) {
      const item = state.items.find(i => i.id === action.payload.id);
      if (item) {
        item.quantity += 1;
      } else {
        state.items.push({ ...action.payload, quantity: 1 });
      }
      // Save to localStorage for guest users
      if (!state.userId) {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    removeItem(state, action) {
      state.items = state.items.filter(i => i.id !== action.payload);
      if (!state.userId) {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    incrementQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item) item.quantity += 1;
      if (!state.userId) {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    decrementQuantity(state, action) {
      const item = state.items.find(i => i.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      } else {
        state.items = state.items.filter(i => i.id !== action.payload);
      }
      if (!state.userId) {
        localStorage.setItem("cart", JSON.stringify(state.items));
      }
    },
    clearCart(state) {
      state.items = [];
      if (!state.userId) {
        localStorage.removeItem("cart");
      }
    },
  },
});

export const {
  setUserId,
  setCartItems,
  addItem,
  removeItem,
  incrementQuantity,
  decrementQuantity,
  clearCart,
} = cartSlice.actions;

// Thunk actions for database sync
export const loadCartFromDB = (userId) => async (dispatch) => {
  try {
    const res = await api.getUserCart(userId);
    dispatch(setCartItems(res.data.items || []));
    dispatch(setUserId(userId));
  } catch (err) {
    console.error("Failed to load cart:", err);
  }
};

export const saveCartToDB = (userId, items) => async () => {
  try {
    await api.saveUserCart(userId, items);
  } catch (err) {
    console.error("Failed to save cart:", err);
  }
};

export const clearCartFromDB = (userId) => async (dispatch) => {
  try {
    await api.clearUserCart(userId);
    dispatch(clearCart());
    dispatch(setUserId(null));
  } catch (err) {
    console.error("Failed to clear cart:", err);
  }
};

export default cartSlice.reducer;
