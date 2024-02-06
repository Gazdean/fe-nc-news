import IndividualArticleCard from "./IndividualArticleCard";
import {fetchArticleById} from '../utils/api-utils';
import { useEffect, useState } from "react";
import { useParams } from "react-router";


export default function IndividualArticle() {
    const {article_id} = useParams()
    const [ article, setArticle] = useState([])

    useEffect(() => {
        fetchArticleById(article_id)
        .then((article) => {
            setArticle(article);
        })
        .catch((error) => {
            console.log(error);
        });
    }, []);

    return (
        <>
        <IndividualArticleCard article={article}/>
        </>
    )
}