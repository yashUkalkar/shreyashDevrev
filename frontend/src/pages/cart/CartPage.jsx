import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faHome,
  faSignOut,
  faAngleRight,
  faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

import { useNavigate } from "react-router-dom";

import { signOut } from "firebase/auth";
import { auth } from "../../firebase";

import { useStore } from "../../store";
import { BookComponent } from "../home/BookComponent";
import { useState } from "react";

export const CartPage = () => {
  const navigate = useNavigate();

  const cart = useStore((state) => state.cart);

  const [showSuccessBox, setShowSuccessBox] = useState(false);

  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        width: "100vw",
        height: "100vh",
      }}
    >
      {showSuccessBox ? (
        <div
          style={{
            position: "fixed",
            top: "0",
            left: "0",
            width: "100%",
            backgroundColor: "green",
            color: "white",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "15px",
          }}
        >
          <FontAwesomeIcon icon={faCheckCircle} size="lg" />
          <p style={{ fontSize: "22px" }}>Checkout successful!</p>
        </div>
      ) : (
        <></>
      )}

      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <h1 style={{ color: "#cc1d5e" }}>Biblio-Hub</h1>

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
              navigate("/");
            }}
            title="Home"
          >
            <FontAwesomeIcon icon={faHome} size="lg" />
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

      <section style={{ flexGrow: 1 }}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h3 style={{ textAlign: "center", fontSize: "24px" }}>Your Cart</h3>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "10px",
              cursor: "pointer",
            }}
            onClick={() => {
              setShowSuccessBox(true);
              setTimeout(() => {
                setShowSuccessBox(false);
              }, 3000);
            }}
          >
            <p>Checkout</p>
            <FontAwesomeIcon icon={faAngleRight} size="lg" />
          </div>
        </div>
        {cart.length ? (
          <section
            style={{
              flexGrow: 1,
              display: "grid",
              gridTemplateColumns: "1fr 1fr 1fr",
              justifyItems: "center",
              gap: "15px",
            }}
          >
            {cart.map((book, index) => (
              <BookComponent {...{ book }} key={index} />
            ))}
          </section>
        ) : (
          <div
            style={{
              display: "grid",
              placeItems: "center",
              width: "100%",
              height: "100%",
            }}
          >
            Your cart is empty
          </div>
        )}
      </section>
    </div>
  );
};
