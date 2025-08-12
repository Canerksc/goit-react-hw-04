import { useState } from "react";
import toast from "react-hot-toast";
import styles from "./SearchBar.module.css";


export default function SearchBar({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") {
      toast.error("Lütfen aramak için metin giriniz");
      return;
    }
    onSubmit(query.trim());
    setQuery("");
  };

  return (
    <header className={styles.searchBar} >
      <form onSubmit={handleSubmit}>
        <input
          className="input"
          type="text"
          autoComplete="off"
          placeholder="Search images and photos"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">Search</button>
      </form>
    </header>
  );
}
