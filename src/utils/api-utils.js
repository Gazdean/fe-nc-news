import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://newsflash-e6p1.onrender.com/api"
});

export function fetchAllArticles (queryObject){
   return ncNewsApi
  .get("/articles", {params: queryObject})
  .then((response) => {
    return response.data.articles
  })
}

export function fetchArticleById(articleId) {
  return ncNewsApi
  .get(`/articles/${articleId}`)
  .then((response) => {
    return response.data.article
  })
}

export function fetchCommentsByArticleId(articleId) {
  return ncNewsApi
  .get(`/articles/${articleId}/comments`)
  .then((response) => {
    return response.data.comments
  })
}

export function fetchUsers() {
  return ncNewsApi
  .get(`/users`)
  .then((response) => {
    return response.data.users
  })
}

export function fetchTopics() {
  return ncNewsApi
  .get(`/topics`)
  .then((response) => {
    return response.data.topics
  })
}

export function updateArticleByArticleId(articleId, body) {
  return ncNewsApi
  .patch(`/articles/${articleId}`, body)
  .then((response) => {
    return response.data.article
  })
  
}

export function createCommentByArticleId(articleId, body) {
  return ncNewsApi
  .post(`/articles/${articleId}/comments`, body)
  .then((response) => {
    return response.data.comment
  })
}

export function removeCommentByCommentId(commentId) {
  return ncNewsApi
  .delete(`/comments/${commentId}`)
  .then((response) => {
    return response
  })
}