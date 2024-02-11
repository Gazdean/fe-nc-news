import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";
import { useState } from "react";
import { removeCommentByCommentId } from "../utils/api-utils";

export default function CommentsCard({ comment }) {
  const { signedIn, setSignedIn } = useContext(SignedInContext);
  const [isDeleting, setIsDeleting] = useState(false)

  function handleDeleteOnclick(){
   
    setIsDeleting(true)
    removeCommentByCommentId(comment.comment_id)
    .then((response)=> {
      if(response.status === 204) {
        setIsDeleting(false)
      }
    })
    .catch((err)=> {
      console.log(err)
    })
  }

  return (
    <>
      <li className="comment-card">
        <p className="comment_details">{comment.body}</p>
        <p className="comment_details">Comment by {comment.author}</p>
        <p className="comment_details">Votes: {comment.votes}</p>
      </li>
      {comment.author !== signedIn.username ?  null : isDeleting ? <p>Deleting your message</p> : <button onClick= {handleDeleteOnclick}>delete</button> }
    </>
  );
}
