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
    <div id="signin_container">
      <li>
        <img
          id="signin_img"
          src={user.avatar_url}
          alt={`${user.username}'s avatar'`}
        />
      </li>
      <li>
        <p>{user.name}</p>
        {user.username === signedIn.username ? <button onClick={handleSignOut}>Sign out</button>
         : <button onClick={handleSignIn}>Sign in</button>}
      </li>
    </div>
  );
}
