"use client";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "@/lib/redux/searchSlice";

export default function SelectComponents() {
  const [selectedOption, setSelectedOption] = useState("oneway");
  const dispatch = useDispatch();

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    dispatch(searchActions.changeTravelType(event.target.value));
  };

  return (
    <>
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="outline-none p-3 w-40"
      >
        <option value="oneway">One way</option>
        <option value="return">Return</option>
        <option value="multicity">Multi-city</option>
      </select>
    </>
  );
}
