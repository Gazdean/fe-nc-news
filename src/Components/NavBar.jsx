import { Link } from "react-router-dom";
import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";


export default function NavBar() {
  const { signedIn } = useContext(SignedInContext);
  return (
    <div >
      <ul id="nav-bar-container">
        <Link to="/"><li className="nav-detail">NC News</li></Link>
        <Link to="/topics"><li className="nav-detail">Topics</li></Link>
        {signedIn.length === 0 ? <Link to="/signin"><li className="nav-detail">Sign in</li></Link> : <img src={signedIn.avatar_url} alt={`${signedIn.username}'s avatar`}/>}
      </ul>
      
    </div>
  );
} 