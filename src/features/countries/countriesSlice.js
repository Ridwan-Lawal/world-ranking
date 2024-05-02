import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchedCountry: "",
  sortBy: "population",
  region: [],
  status: "",
  totalCountries: 0,
};

const countriesSlice = createSlice({
  name: "countries",
  initialState,
  reducers: {
    updateSearchedCountry(state, action) {
      state.searchedCountry = action.payload;
    },
    updateSortBy(state, action) {
      state.sortBy = action.payload;
    },
    updateRegion(state, action) {
      // when adding the region if the region is already in the state, then remove it, else , add it
      state.region = state.region.includes(action.payload)
        ? state.region.filter((region) => region !== action.payload)
        : [...state.region, action.payload];
    },

    updateStatus(state, action) {
      state.status = state.status === action.payload ? "" : action.payload;
    },

    updateTotalCountries(state, action) {
      state.totalCountries = action.payload;
    },
  },
});

export const {
  updateSearchedCountry,
  updateSortBy,
  updateRegion,
  updateStatus,
  updateTotalCountries,
} = countriesSlice.actions;

export default countriesSlice.reducer;

export const getCountry = (store) => store.countries;
