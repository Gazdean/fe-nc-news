import axios from "axios";

const ncNewsApi = axios.create({
  baseURL: "https://newsflash-e6p1.onrender.com/api/"
});

export default function fetchAllArticles (){
    return ncNewsApi
    .get("/articles")
    .then((response) => {
      return response.data.articles
    })
}