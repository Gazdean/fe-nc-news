import { Link } from "react-router-dom";

export default function ArticleCard({ article }) {

  return (
    <>
          <li className="article-card">
            <h3 id="article-title">{article.title}</h3>
            <div className="article-contents">
              <Link to={`/article/${article.article_id}`}>
                <img
                  id="article-image"
                  className="article-image-style"
                  src={article.article_img_url}
                  alt={`representing the topic of ${article.topic}`}
                />
              </Link>
              <div className="article-list-details">
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
