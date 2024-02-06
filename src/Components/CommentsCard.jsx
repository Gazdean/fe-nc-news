export default function CommentsCard(comment) {
    console.log(comment)
  return (
    <div className="comment_container">
      <li className="comment_details">{comment.comment.body}</li>
      <li className="comment_details">Comment by {comment.comment.author}</li>
      <li className="comment_details">Votes: {comment.comment.votes}</li>
    </div>
  );
}
