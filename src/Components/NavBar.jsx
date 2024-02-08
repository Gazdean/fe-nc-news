import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";


export default function NavBar() {
  const { signedIn } = useContext(SignedInContext);
  return (
    <nav id="nav-bar-container">
        <Link to="/"><p className="nav-detail">NC News</p></Link>
        {signedIn.length === 0 ? <Link to="/signin"><p className="nav-detail">Sign in</p></Link> : <img id="nav_bar_img"src={signedIn.avatar_url} alt={`${signedIn.username}'s avatar`}/>}
    </nav>
  );
} 