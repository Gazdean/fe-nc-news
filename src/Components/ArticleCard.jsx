export default function ArticleCard(props) {
  const { article } = props;

  return (
    <>
      <li className="article_card">
        <h3 id="article_title">{article.title}</h3>

        <div className="article_details">
          <img
            className="article_image"
            src={article.article_img_url}
            alt={`representing the topic of ${article.topic}`}
          />
          <div className="list_details">
            <p>Author: {article.author}</p>
            <p>Topic: {article.topic}</p>
            <p>Comments: {article.comment_count}</p>
            <p>Votes: {article.votes}</p>
          </div>
        </div>
      </li>
    </>
  );
}
