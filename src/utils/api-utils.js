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