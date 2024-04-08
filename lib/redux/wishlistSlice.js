import { createSlice } from "@reduxjs/toolkit";

const initialFormState = {
  wishlist: [],
};

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: initialFormState,
  reducers: {
    addToWishlist(state, action) {
      state.wishlist.push(action.payload);
    },
  },
});

export const wishlistActions = wishlistSlice.actions;

export default wishlistSlice.reducer;
