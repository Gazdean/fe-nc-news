import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";

export default function NavBar() {
  const { signedIn } = useContext(SignedInContext);
  return (
    <nav id="nav-bar-container">
      <Link to="/" style={{ textDecoration: "none" }}>
        <p id="nav-title" className="nav-detail">
          Articles
        </p>
      </Link>
      {signedIn.length === 0 ? (
       null
      ) : (
        <img
          id="nav-bar-img"
          src={signedIn.avatar_url}
          alt={`${signedIn.username}'s avatar`}
        />
      )}
       <Link to="/signin" style={{ textDecoration: "none" }}>
          <p id="sign-in" className="nav-detail">
            {signedIn.length === 0 ? "Sign in" : "sign out"}
          </p>
        </Link>
    </nav>
  );
}
