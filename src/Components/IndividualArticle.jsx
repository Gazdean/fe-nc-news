import IndividualArticleCard from "./IndividualArticleCard";
import { fetchArticleById } from "../utils/api-utils";
import { useEffect, useState } from "react";

export default function IndividualArticle({ article_id , setShowComments, showComments}) {
  const [article, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchArticleById(article_id)
      .then((article) => {
        setArticle(article);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      {isLoading ? (
        <p>...your article is loading</p>
      ) : (
        <IndividualArticleCard article={article} setShowComments={setShowComments} showComments={showComments} article_id={article_id}/>
      )}
    </>
  );
}
