const Pill = ({ key, text, onclick }) => {
  return (
    <span
      key={key}
      onClick={onclick}
      className="text-center align-middle mr-2 mb-2"
    >
      <span className="bg-white p-1 cursor-pointer flex justify-center items-center">
        <h2 className="pr-4 text-xs text-center">{text}</h2>
        <span>x</span>
      </span>
    </span>
  );
};

export default Pill;
