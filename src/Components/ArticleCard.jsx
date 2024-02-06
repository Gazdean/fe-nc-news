import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {
  return (
    <>
      <li className="article_card">
        <h3 id="article_title">{article.title}</h3>

        <div className="article_details">
          <Link to={`/article/${article.article_id}`}>
            <img
              className="article_image"
              src={article.article_img_url}
              alt={`representing the topic of ${article.topic}`}
            />
          </Link>
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