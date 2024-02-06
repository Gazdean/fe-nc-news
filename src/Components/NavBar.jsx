import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div >
      <ul id="nav-bar-container">
        <Link to="/"><li>NC News</li></Link>
        <Link to="/topics"><li>Topics</li></Link>
        <Link to="/profile"><li>userName</li></Link>
        <Link to="/profile"><img src="" alt="user avatar" /></Link>
      </ul>
    </div>
    
  );
}
