"use client";
import React, { useEffect, useRef, useState } from "react";
import Pill from "./Pill";
import { useDispatch, useSelector } from "react-redux";
import { searchActions } from "@/lib/redux/searchSlice";

const MultiSelect = ({ name }) => {
  const { searchData } = useSelector((state) => state.search);

  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const fetchAirportsData = async () => {
    if (searchTerm.trim() === "") {
      setSuggestions([]);
      return;
    }
    const url = "https://api.api-ninjas.com/v1/airports?name=" + searchTerm;
    const res = await fetch(url, {
      method: "GET",
      headers: {
        "X-Api-Key": "P7LOfuMJvr5UDXVFUKD3wQ==8K6cmTHCE5PilTIn",
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    setSuggestions(data);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      fetchAirportsData();
    }, 50);
    return () => {
      clearTimeout(timer);
    };
  }, [searchTerm]);

  const handleSelectAirport = (s) => {
    dispatch(searchActions.addAirport({ name, data: s }));
    setSearchTerm("");
    setSuggestions([]);
    inputRef.current.focus();
  };

  const handleRemoveAirport = (airport) => {
    dispatch(searchActions.removeAirport({ name, data: airport }));
  };

  return (
    <div className="mx-auto text-center w-full">
      <div className="flex flex-wrap items-center p-3 bg-slate-100 rounded-xl relative">
        {searchData[name].map((s) => (
          <Pill
            className=""
            key={s.id}
            text={s.name}
            onclick={() => handleRemoveAirport(s)}
          />
        ))}
        <input
          ref={inputRef}
          className="outline-none bg-slate-100"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder={name[0].toUpperCase() + name.slice(1)}
        />
      </div>

      {suggestions.length > 1 && (
        <div className="absolute mt-2 p-2 bg-white shadow-xl">
          {suggestions.map((s) => (
            <div
              key={s.name}
              className="text-center mx-auto p-4 border-b border-gray-300 hover:bg-slate-100 gap-1 flex"
              onClick={() => handleSelectAirport(s)}
            >
              <h2 className="text-sm">{s.name}</h2>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MultiSelect;
