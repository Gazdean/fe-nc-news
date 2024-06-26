import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";
import { useState } from "react";
import { removeCommentByCommentId } from "../utils/api-utils";

export default function CommentsCard({ comment, setComments, setIsDeleting, isDeleting }) {
  const { signedIn, setSignedIn } = useContext(SignedInContext);
  // const [isDeleting, setIsDeleting] = useState(false)

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
        <p className="comment-content">{comment.body}</p>
        <div id="comment-details">
          <p className="comment-content">{comment.author}</p>
          <p className="comment-content">Votes: {comment.votes}</p>
        </div>
      </li>
      {comment.author !== signedIn.username ?  null : isDeleting ? <p>Deleting your message</p> : <button onClick= {handleDeleteOnclick}>delete</button> }
    </>
  );
}


