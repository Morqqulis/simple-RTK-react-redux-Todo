const InputField = ({ text, handleInput, handleSubmit }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label
        className={`w-full flex whitespace-nowrap gap-2.5 items-center mx-auto`}
      >
        <input
          className={`p-2.5  rounded-lg w-full text-xl`}
          type="text"
          value={text}
          onChange={(e) => handleInput(e.target.value)}
        />
        <button
          className={`py-2.5 px-5 bg-red-800 rounded-lg`}
          onClick={handleSubmit}
          type={"submit"}
        >
          Add Todo
        </button>
      </label>
    </form>
  );
};

export default InputField;
