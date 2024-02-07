import { useState, useEffect } from "react";

import ArticleCard from "./ArticleCard";
import { fetchAllArticles } from "../utils/api-utils";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchAllArticles()
      .then((allArticles) => {
        setAllArticles(allArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      {isLoading ? (
        <p>...your articles are loading</p>
      ) : (
        <ul className="article_container">
          {allArticles.map((article) => {
            return <ArticleCard key={article.article_id} article={article} />;
          })}
        </ul>
      )}
    </div>
  );
}
