import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";

export default function CommentsCard({ comment }) {
  const { signedIn, setSignedIn } = useContext(SignedInContext);

  return (
    <>
      <li className="comment_container">
        <p className="comment_details">{comment.body}</p>
        <p className="comment_details">Comment by {comment.author}</p>
        <p className="comment_details">Votes: {comment.votes}</p>
      </li>
      {comment.author === signedIn.username ? <button>delete</button>: null}
    </>
  );
}
