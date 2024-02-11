import { useState } from "react";
import { useContext } from "react";
import { SignedInContext } from "../contexts/SignedinContext";

import { createCommentByArticleId } from "../utils/api-utils";

export default function CommentForm({
  article_id,
  setCommentCount,
  commentCount,
  setPostedComment,
  postedComment
}) {

  const [newComment, setNewComment] = useState("");
  const { signedIn } = useContext(SignedInContext);
  const [postingComment, setPostingComment] = useState(false);
  const [error, setError] = useState("")

  function handleCommentInput(event) {
    setNewComment(event.target.value);
  }

  function handleCommentSubmit(event) {
    event.preventDefault();
    setPostingComment(true);
    postedComment ? setPostedComment(false) : null
    const commentBody = { username: signedIn.username, body: newComment };
    createCommentByArticleId(article_id, commentBody)
      .then((response) => {
        error ? "" : null
        setPostingComment(false);
        setCommentCount(commentCount + 1);
        setNewComment("");
        setPostedComment(true);
      })
      .catch((err) => {
        setError(err.code)
        console.log(err);
      });
  }
  return (
    <>
      {error === "ERR_NETWORK" ? <h2>503 Service Unavailable</h2>: signedIn.length === 0 ? null : (
        <form id="comment-form" onSubmit={handleCommentSubmit}>
          <label htmlFor="comment-input"></label>
          <textarea
            onChange={handleCommentInput}
            id="comment-input"
            type="text"
            value={newComment}
            placeholder="write a comment..."
            required
          />
          {postingComment ? (
            <p>..posting comment</p>
          ) : (
            <button id= "submit-comment-button" className="button">submit comment</button>
          )}
        </form>
      )}
    </>
  );
}
