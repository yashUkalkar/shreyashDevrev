import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faSearch } from "@fortawesome/free-solid-svg-icons";

// import useBookStore from "../../hooks/useBookStore";

export const SearchBar = (props) => {
  // eslint-disable-next-line react/prop-types
  const { searchQuery, setSearchQuery } = props;

  // const [searchQuery, setSearchQuery] = useState("");
  // const { submitSearchQuery } = useBookStore(searchQuery);

  return (
    <form
      style={{
        flexGrow: 1,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        paddingInline: "10px",
      }}
    >
      <FontAwesomeIcon icon={faSearch} size="lg" />
      <input
        type="text"
        name="searchQuery"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Search by book title"
        minLength={1}
        style={{
          width: "100%",
          outline: "none",
          borderInline: "none",
          borderTop: "none",
          borderBottom: "1px solid #cc1d5e",
          padding: "5px",
          fontSize: "16px",
        }}
      />
    </form>
  );
};
