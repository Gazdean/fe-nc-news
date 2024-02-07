import { useState } from "react";
import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";

import { createCommentByArticleId } from "../utils/api-utils";

export default function CommentForm({ article_id, comments, setCommentCount, commentCount}) {
  const [newComment, setNewComment] = useState("");
  const { signedIn } = useContext(SignedInContext);
  const [postingComment, setPostingComment] = useState(false)

  function handleCommentInput(event) {
    setNewComment(event.target.value);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
   setPostingComment(true)
    const commentBody = { username: signedIn.username, body: newComment };
    createCommentByArticleId(article_id, commentBody)
      .then((response) => {
        setPostingComment(false)
        setCommentCount(commentCount + 1 )
        setNewComment("")
        
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <>
     { signedIn.length === 0 ? null : <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Write a comment</label>
        <textarea
          onChange={handleCommentInput}
          id="comment-input"
          type="text"
          value={newComment}
          required
        />
        {postingComment ? <p>..posting comment</p> : <button className="button">submit comment</button>}
      </form>}
    </>
  );
}
