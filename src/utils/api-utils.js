import axios from "axios";

export default function FetchAllArticles (){
    return axios
    .get("https://newsflash-e6p1.onrender.com/api/articles")
    .then((response) => {
      return response.data.articles
    })
    .catch((error) => {
      console.log(error);
    });
}