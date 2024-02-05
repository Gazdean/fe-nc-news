import ArticleCard from "./ArticleCard"

export default function Articles({allArticles}){

    return (
        <div>
            <ul className="article_container">
                {allArticles.map(article=>{
                    return <ArticleCard key={article.article_id} article={article} />
                })}
            </ul>
        </div>
    )
}