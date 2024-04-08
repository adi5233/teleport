import Search from "./Search/Search";

const SearchFormContainer = () => {
  return (
    <div className="h-[30rem] md:h-64  mt-2 px-5 md:px-10">
      <div className="mt-8 text-3xl font-bold font-sans">
        Where do you want to go?
      </div>
      <div className="">
        <Search />
      </div>
    </div>
  );
};

export default SearchFormContainer;
