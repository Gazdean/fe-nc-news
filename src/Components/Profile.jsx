import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";



export default function Profile() {
    const { signedIn, setSignedIn } = useContext(SignedInContext);
    
    return (
        <>
        <h1>Profile</h1>
        <p>Welcome {signedIn.name}</p>
       <img className="user-image" id="profile-image" src={signedIn.avatar_url} alt={`${signedIn.username}'s profile pictue`} />
       <p>Comments</p>
      
        </>
    )
}