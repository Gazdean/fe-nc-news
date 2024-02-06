import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../utils/api-utils";
import CommentsCard from "./CommentsCard";

export default function Comments({article_id, showComments}) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState([]);
    
    useEffect(() => {
        fetchCommentsByArticleId(article_id)
          .then((comments) => {
            setComments(comments);
            setIsLoading(false);
          })
          .catch((error) => {
            console.log(error);
          });
      }, []);
    return (
        <>
        {showComments ? 
             <div>
      {isLoading ? (
        <p>...comments are loading</p>
      ) : (
        <ul>
          {comments.map((comment) => {
            return <CommentsCard key={comment.comment_id} comment={comment} />;
          })}
        </ul>
      )}
    </div> : null}
        </>
    )
    
}