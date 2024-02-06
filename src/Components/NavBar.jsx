import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div >
      <ul id="nav-bar-container">
        <Link to="/"><li className="nav-detail">NC News</li></Link>
        <Link to="/topics"><li className="nav-detail">Topics</li></Link>
        <Link to="/profile"><li className="nav-detail">userName</li></Link>
        
      </ul>
      <Link to="/profile"><img src="" alt="user avatar" /></Link>
    </div>
  );
  
}