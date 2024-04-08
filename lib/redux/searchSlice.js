import { createSlice } from "@reduxjs/toolkit";
import { addDays, format } from "date-fns";

let searchData = {
  from: [],
  to: [],
  date: {
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  },
};

let passengerData = {
  adults: 0,
  students: 0,
  youths: 0,
  childrens: 0,
  toddlers: 0,
  infants: 0,
};

const initialFormState = {
  travelType: 0,
  passengerData,
  searchData,
  class: "",
};

const searchSlice = createSlice({
  name: "search",
  initialState: initialFormState,
  reducers: {
    changeTravelType(state, action) {
      state.travelType = action.payload;
    },
    addAirport(state, action) {
      const { name, data } = action.payload;
      state.searchData[name].push(data);
    },
    removeAirport(state, action) {
      const { name, data } = action.payload;
      const newdata = state.searchData[name].filter((s) => s.name != data.name);
      state.searchData[name] = newdata;
    },
    interchangeAirports(state) {
      let temp = state.searchData.from;
      state.searchData.from = state.searchData.to;
      state.searchData.to = temp;
    },
    addDate(state, action) {
      state.searchData.date = action.payload;
    },
  },
});

export const searchActions = searchSlice.actions;

export default searchSlice.reducer;
