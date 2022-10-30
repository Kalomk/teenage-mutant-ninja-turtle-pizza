import { createSlice } from '@reduxjs/toolkit';
const initialState: { searchValue: string } = {
  searchValue: '',
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    handleChangeSearch: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

const { actions, reducer } = searchSlice;
export default reducer;
export const { handleChangeSearch } = actions;
