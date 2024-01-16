const Form = ({ search, handleSearchChange }) => {
  return (
    <form>
      <div>
        Find Countries:{" "}
        <input value={search} onChange={handleSearchChange} required />
      </div>
    </form>
  );
};

export default Form;
