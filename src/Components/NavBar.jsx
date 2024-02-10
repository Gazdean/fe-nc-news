import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";


export default function NavBar() {
  const { signedIn } = useContext(SignedInContext);
  return (
    <nav id="nav-bar-container">
        <Link to="/" style={{textDecoration: 'none'}}><p id="nav-title" className="nav-detail">Articles</p></Link>
        {signedIn.length === 0 ? <Link to="/signin" style={{textDecoration: 'none'}}><p id="sign-in" className="nav-detail">Sign in</p></Link> : <img id="nav-bar-img"src={signedIn.avatar_url} alt={`${signedIn.username}'s avatar`}/>}
    </nav>
  );
} 