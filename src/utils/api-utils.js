import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://newsflash-e6p1.onrender.com/api/"
});

export function fetchAllArticles (){
  return ncNewsApi
  .get("/articles")
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