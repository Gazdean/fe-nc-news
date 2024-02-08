import { useParams } from "react-router";
import IndividualArticle from "./IndividualArticle";
import Comments from "./Comments";
import { useState } from "react";

export default function IndividualArticleManager() {
    const { article_id } = useParams();
    const [showComments, setShowComments] = useState(false)
    const [commentCount, setCommentCount] = useState(0)
    const [postedComment, setPostedComment] = useState(false)
    
  return (
    <>
      <IndividualArticle article_id={article_id} setShowComments={setShowComments} showComments={showComments} setCommentCount={setCommentCount} commentCount={commentCount}/>
      <Comments article_id={article_id} showComments={showComments} setCommentCount={setCommentCount} commentCount={commentCount} setPostedComment = {setPostedComment} postedComment={postedComment}/>
    </>
  );
  
}
