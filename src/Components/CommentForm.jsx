import { useState } from "react"
import { createCommentByArticleId } from "../utils/api-utils"

export default function CommentForm() {
    const [newComment, setNewComment] = useState('')

    function handleCommentSubmit() {
        // createCommentByArticleId()
    }
    
    return (
        <>
        <p>Write a comment</p>
        <label htmlFor="comment-input"></label>
        <input id="comment-input"type="text" />
        <button onClick={handleCommentSubmit}>submit comment</button>
        </>
    )
}