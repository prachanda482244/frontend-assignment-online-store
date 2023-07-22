// searchSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    searchTerm: '',
    filteredData: [],
};

const searchSlice = createSlice({
    name: 'search',
    initialState,
    reducers: {
        updateSearchQuery: (state, action) => {
            state.searchQuery = action.payload;
        },
        updateFilteredData: (state, action) => {
            state.filteredData = action.payload;
        },
    },
});

export const { updateSearchQuery, updateFilteredData } = searchSlice.actions;

export default searchSlice.reducer;
