"use client";
import MultiSelect from "./MultiSelect";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { searchActions } from "@/lib/redux/searchSlice";
import DatePicker from "./DatePicker";
import { Search } from "lucide-react";
import { ArrowRightLeft } from "lucide-react";

const SearchBox = () => {
  const dispatch = useDispatch();

  function handeleInterchange() {
    dispatch(searchActions.interchangeAirports());
  }
  return (
    <div className="grid grid-cols-12 gap-2 mt-4">
      <div className="bg-gray-100 col-span-12 md:col-span-3 h-auto">
        <MultiSelect name="from" />
      </div>
      <div className="bg-gray-100 col-span-12 md:col-span-1 h-auto">
        <ArrowRightLeft
          className="p-2 h-12 w-12 cursor-pointer rounded-md mx-auto"
          onClick={() => handeleInterchange()}
        />
      </div>
      <div className="bg-gray-100 col-span-12 md:col-span-3 h-auto">
        <MultiSelect name="to" />
      </div>
      <div className="bg-gray-100 col-span-12 md:col-span-4 h-auto">
        <DatePicker className="bg-gray-100 " />
      </div>
      <div className="bg-[#e8381b] md:bg-gray-100 col-span-12 md:col-span-1 h-auto">
        <Search className="bg-[#e8381b] p-2 h-12 w-12 cursor-pointer text-white rounded-md mx-auto" />
      </div>
    </div>
  );
};

export default SearchBox;
