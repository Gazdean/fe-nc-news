import { useState } from "react";
import { createCommentByArticleId } from "../utils/api-utils";

export default function CommentForm({article_id}) {
  const [newComment, setNewComment] = useState("");

  function handleCommentInput(event) {
   setNewComment(event.target.value);
  }

    // need to create sign in to get username

  function handleCommentSubmit(newComment) {
    const commentBody = {username: "", body: newComment}
    createCommentByArticleId(article_id, );
  }

  return (
    <>
      <form onSubmit={handleCommentSubmit}>
        <label htmlFor="comment-input">Write a comment</label>
        <textarea onChange={handleCommentInput} id="comment-input" type="text" />
        <button className="button">submit comment</button>
      </form>
    </>
  );
}
