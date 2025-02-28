import c from "./SearchBox.module.css";
import { FaSistrix } from "react-icons/fa";

const SearchBox = ({ search, onChange }) => (
  <div className={c.searchBox}>
    <label htmlFor="filter">Find contacts by name</label>
    <div className={c.inputWrapper}>
      <FaSistrix className={c.icon} />
      <input
        type="text"
        id="filter"
        value={search}
        onChange={onChange}
        placeholder="Name..."
      />
    </div>
  </div>
);

export default SearchBox;
