import { useNavigate, useLocation } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { SearchBar } from "./SearchBar";

import { faSignOut, faCartShopping } from "@fortawesome/free-solid-svg-icons";

export const HomeHeader = (props) => {
  // eslint-disable-next-line react/prop-types
  const { searchQuery, setSearchQuery } = props;

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        gap: "20px",
      }}
    >
      <h1 style={{ color: "#cc1d5e" }}>Biblio-Hub</h1>

      <SearchBar {...{ searchQuery, setSearchQuery }} />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            navigate("/cart");
          }}
          title="Cart"
        >
          <FontAwesomeIcon icon={faCartShopping} size="lg" />
        </span>
        <span
          style={{
            cursor: "pointer",
          }}
          onClick={() => {
            signOut(auth).then(() => {
              sessionStorage.setItem("isSignedIn", "");
              navigate("/auth", { state: { from: location } });
            });
          }}
          title="Signout"
        >
          <FontAwesomeIcon icon={faSignOut} size="lg" />
        </span>
      </div>
    </header>
  );
};
