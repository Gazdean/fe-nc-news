import { useState, useEffect } from "react";
import { fetchCommentsByArticleId } from "../utils/api-utils";
import CommentsCard from "./CommentsCard";
import CommentForm from "./commentForm";

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
            console.log(error);
          });
      }, [postedComment]);

  console.log(postedComment)


    return (
        <>
        {showComments ? 
             <div>
      {isLoading ? (
        <p>...comments are loading</p>
      ) : (
        <ul>
          <CommentForm article_id={article_id} comments={comments} setCommentCount={setCommentCount} commentCount={commentCount} setPostedComment={setPostedComment}/>
          {comments.map((comment) => {
            return <CommentsCard key={comment.comment_id} comment={comment} />;
          })}
          
        </ul>
      )}
    </div> : null}
        </>
    )
    
}