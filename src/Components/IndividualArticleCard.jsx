import { useState } from "react";
import { updateArticleByArticleId } from "../utils/api-utils";

export default function IndividualArticleCard({
  article,
  setShowComments,
  showComments,
  article_id,
  commentCount
}) {
  const [existingVotes, setExistingVotes] = useState(article.votes);
  const [error, setError] = useState(false)
  const [voted, setVoted] = useState(false)

  function handleShowComments() {
    if (!showComments)setShowComments(true);
    else setShowComments(false)
  }

  // function handleHideComments() {
  //   setShowComments(false);
  // }

  function handleAddVote() {
    const updatedVotes = existingVotes + 1;
    setExistingVotes(updatedVotes);
    setVoted(true)
    updateArticleByArticleId(article_id, {inc_votes: 1})
    .then((response)=> {
      setError(false)
    })
    .catch((err) => {
      console.log(err);
      if (err) {
        setVoted(false)
        setError(true)
      }
    });
  }

  function handleDeleteVote() {
    const updatedVotes = existingVotes - 1;
    setExistingVotes(updatedVotes);
    setVoted(false)
    updateArticleByArticleId(article_id, {inc_votes: -1})
    .then((response)=> {
    
      setError(false)
    })
    .catch((err) => {
      console.log(err);
      if (err) {
        setError(true)
      }
    });
  }

  return (
    <section id="individual-article-container">
      <h2 id="individual-article-title">{article.title}</h2>
      <ul className="individual-article-details">
        <li>Author: {article.author}</li>
        <li>Topic: {article.topic}</li>
      </ul>
      <img
        id="individual-article-image"
        className="article-image-style"
        src={article.article_img_url}
        alt={article.title}
      />
      
      <p id="individual-article-body">{article.body}</p>
      <ul id="votes-comments-headers" className="individual-article-details">
        <li>Votes: {existingVotes}</li>
        <li>Comments: {commentCount}</li>
      </ul>
      <div id="vote-comment-buttons">
      {error? <p>vote was unsuccessful</p> 
      : voted ? <button id="remove-vote-button" onClick={handleDeleteVote} disabled={!voted}>Remove Vote</button>
      : <button id="vote-button" onClick={handleAddVote} disabled={voted}>Vote</button>}
      <button id="comment-button" onClick={handleShowComments}>{showComments ? "Hide comments" : "show comments"}</button>
      </div>
      {showComments ? null : <div className="bottom-spacer"></div>}
    </section> 
  )
}
