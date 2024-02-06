import { useState } from "react";
import { updateArticleByArticleId } from "../utils/api-utils";

export default function IndividualArticleCard({
  article,
  setShowComments,
  showComments,
  article_id
}) {
  const [existingVotes, setExistingVotes] = useState(article.votes);
  const [error, setError] = useState(null)
  const [voted, setVoted] = useState(false)

  function handleShowComments() {
    setShowComments(true);
  }

  function handleHideComments() {
    setShowComments(false);
  }

  function handleAddVote() {
    const updatedVotes = existingVotes + 1;
    setExistingVotes(updatedVotes);

    updateArticleByArticleId(article_id, {inc_votes: 1})
    .then((response)=> {
      setExistingVotes(response.votes)
      setVoted(true)
      setError(null)
    })
    .catch((err) => {
      console.log(err);
      if (err) {
        setError(err)
      }
      setExistingVotes(article.votes)
    });
  }

  function handleDeleteVote() {
    const updatedVotes = existingVotes - 1;
    setExistingVotes(updatedVotes);

    updateArticleByArticleId(article_id, {inc_votes: -1})
    .then((response)=> {
      setExistingVotes(response.votes)
      setVoted(false)
      setError(null)
    })
    .catch((err) => {
      console.log(err);
      if (err) {
        setError(err)
      }
      setExistingVotes(article.votes)
    });
  }

  return (
    <section>
      <h2>{article.title}</h2>
      <img
        id="individual-article-image"
        src={article.article_img_url}
        alt={article.title}
      />
      <ul className="individual-article-details">
        <li>Author: {article.author}</li>
        <li>Topic: {article.topic}</li>
      </ul>
      <p>{article.body}</p>
      <ul className="individual-article-details">
        <li>Votes: {existingVotes}</li>
        <li>Comments: {article.comment_count}</li>
      </ul>
      {voted ? <button onClick={handleDeleteVote}> Remove Vote</button> : <button onClick={handleAddVote}>Vote</button>}
      {error? <p>vote was unsuccessful</p> : null}
      {showComments ? (<button onClick={handleHideComments}>hide comments</button>)
      : (<button onClick={handleShowComments}>show comments</button>)}
    </section>
  );
}
