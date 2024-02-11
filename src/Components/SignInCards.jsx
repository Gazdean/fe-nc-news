import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";

export default function SignInCard({ user }) {
  const { signedIn, setSignedIn } = useContext(SignedInContext);

  function handleSignIn() {
    setSignedIn(user);
  }

  function handleSignOut() {
    setSignedIn([])
  }

  return (
    <div id="signin-card">
      <li>
        <img
          id="signin-img"
          src={user.avatar_url}
          alt={`${user.username}'s avatar'`}
        />
      </li>
      <li id="">
        <p id="signin-username" >{user.name}</p>
        {user.username === signedIn.username ? <button className="signin-button" onClick={handleSignOut} className="signin-button">Sign out</button>
         : <button onClick={handleSignIn} className="signin-button">Sign in</button>}
      </li>
    </div>
  );
}
