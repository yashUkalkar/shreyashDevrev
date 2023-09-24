import { useEffect } from "react";
import {
  GoogleAuthProvider,
  GithubAuthProvider,
  EmailAuthProvider,
  PhoneAuthProvider,
} from "firebase/auth";

import { getFirebaseUI } from "../../firebase";
import { Navigate } from "react-router-dom";

export const AuthDashboard = () => {
  const hostURL = import.meta.env.BASE_URL || "http://localhost:5173";

  useEffect(() => {
    const ui = getFirebaseUI();

    // Sign in options
    ui.start("#firebase-auth-container", {
      signInFlow: "popup",
      signInOptions: [
        {
          provider: EmailAuthProvider.PROVIDER_ID,
          signInMethod: EmailAuthProvider.EMAIL_PASSWORD_SIGN_IN_METHOD,
        },
        {
          provider: GoogleAuthProvider.PROVIDER_ID,
          signInMethod: GoogleAuthProvider.GOOGLE_SIGN_IN_METHOD,
        },
        {
          provider: GithubAuthProvider.PROVIDER_ID,
          signInMethod: GithubAuthProvider.GITHUB_SIGN_IN_METHOD,
        },
        {
          provider: PhoneAuthProvider.PROVIDER_ID,
          signInMethod: PhoneAuthProvider.PHONE_SIGN_IN_METHOD,
          recaptchaParameters: {
            type: "image",
            size: "normal",
          },
          loginHint: "+919876543210",
        },
      ],
      signInSuccessUrl: hostURL,
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return !sessionStorage.getItem("isSignedIn") ? (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        minHeight: "100vh",
        overflowX: "hidden",
        display: "flex",
        flexDirection: "column",
        padding: "5px",
      }}
    >
      <header>
        <h1 style={{ color: "#cc1d5e", textAlign: "center" }}>Biblio-Hub</h1>
      </header>

      <main
        style={{
          flexGrow: 1,
          display: "grid",
          placeItems: "center",
        }}
      >
        <section
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            width: "100%",
            minWidth: "350px",
            maxWidth: "400px",
          }}
        >
          <h3>Sign in using:</h3>
          <div id="firebase-auth-container" style={{ width: "100%" }}></div>
        </section>
      </main>
    </div>
  ) : (
    <Navigate to="/" />
  );
};
