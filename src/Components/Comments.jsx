import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../utils/api-utils";
import CommentsCard from "./CommentsCard";
import CommentForm from "./CommentForm";

export default function Comments({article_id, showComments, setCommentCount, commentCount, postedComment, setPostedComment}) {
    const [comments, setComments] = useState([])
    const [isLoading, setIsLoading] = useState([]);
    
    useEffect(() => {
        fetchCommentsByArticleId(article_id)
          .then((comments) => {
            setComments(comments);
            setIsLoading(false);
          })
          .catch((error) => {
            setError(error.code)
            console.log(error);
          });
      }, [postedComment]);




    return (
        <>
        {showComments ? 
             <div>
      {isLoading ? (
        <p>...comments are loading</p>
      ) : (
        <ul id="comments-container">
          <CommentForm article_id={article_id} comments={comments} setCommentCount={setCommentCount} commentCount={commentCount} setPostedComment={setPostedComment} postedComment={postedComment}/>
          {comments.map((comment) => {
            return <CommentsCard key={comment.comment_id} comment={comment} />;
          })}
          
        </ul>
      )}
    </div> : null}
        </>
    )
    
}