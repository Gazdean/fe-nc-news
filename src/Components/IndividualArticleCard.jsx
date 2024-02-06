export default function IndividualArticleCard({ article, setShowComments, showComments }) {
 
  function handleShowComments() {
    setShowComments(true)
  }

  function handleHideComments() {
    setShowComments(false)
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
        <li>Votes: {article.votes}</li>
        <li>Comments: {article.comment_count}</li>
      </ul>
      {showComments ? <button onClick={handleHideComments}>hide comments</button> : <button onClick={handleShowComments}>show comments</button> }
    </section>
  );
}
