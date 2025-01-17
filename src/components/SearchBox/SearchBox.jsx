import c from "./SearchBox.module.css";

const SearchBox = ({ search, onChange }) => (
  <div className={c.searchBox}>
    <label htmlFor="filter">Find contacts by name</label>
    <input
      type="text"
      id="filter"
      value={search}
      onChange={onChange}
      placeholder="Name..."
    />
  </div>
);

export default SearchBox;
