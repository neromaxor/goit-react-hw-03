import css from "./SearchBox.module.css";

export default function SearchBox({ value, onFilter }) {
  return (
    <div className={css.searchBox}>
      <label htmlFor="name" className={css.label}>
        Find contacts by name
      </label>
      <input
        className={css.input}
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
      />
    </div>
  );
}
