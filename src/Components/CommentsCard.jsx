export default function CommentsCard(comment) {
  return (
    <li className="comment_container">
      <p className="comment_details">{comment.comment.body}</p>
      <p className="comment_details">Comment by {comment.comment.author}</p>
      <p className="comment_details">Votes: {comment.comment.votes}</p>
    </li>
  );
}
