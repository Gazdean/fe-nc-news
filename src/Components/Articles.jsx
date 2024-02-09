import { useState, useEffect } from "react";

import ArticleCard from "./ArticleCard";
import { fetchAllArticles, fetchTopics } from "../utils/api-utils";
import TopicOptions from "./TopicOptions";
import { useLocation, useNavigate, useSearchParams } from "react-router-dom";
import ShareButtons from "./ShareButtons";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("false")
  const [searchParams, setSearchParams] = useSearchParams("");

  const topicSearchParam = searchParams.get("topic");
  const sortBySearchParam = searchParams.get("sort_by");
  const orderSearchParam = searchParams.get("order");

  useEffect(() => {
    
    const paramObject ={}

    if(topicSearchParam) {
      paramObject.topic = topicSearchParam}
    if(sortBySearchParam) {
      paramObject.sort_by = sortBySearchParam}
    if(orderSearchParam) {
      paramObject.order = orderSearchParam}

    fetchAllArticles(paramObject)

      .then((receivedArticles) => {
        setAllArticles(receivedArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [topicSearchParam, sortBySearchParam, orderSearchParam]);

  useEffect(() => {
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleFilter() {
    if (filter===false) setFilter(true)
    else setFilter(false)
  }

  function handleSelectTopic(event) {
    const topic = event.target.value
    const newParams = new URLSearchParams(searchParams);
    newParams.set("topic", topic);
    setSearchParams(newParams)
  }

  function handleSelectSortBy(event) {
    const sortBy = event.target.value
    const newParams = new URLSearchParams(searchParams);
    newParams.set("sort_by", sortBy);
    setSearchParams(newParams) 
  }

  function handleSelectOrder(event) {
    const order = event.target.value
    const newParams = new URLSearchParams(searchParams);
    newParams.set("order", order);
    setSearchParams(newParams);
  }
  
  return (
    <div>
      <ShareButtons />
      {isLoading ? (
        <p>...your articles are loading</p>
      ) : (
        <>
          <label htmlFor="topics">Pick a topic: </label>
          <select onChange={handleSelectTopic} id="topics" >
            <option value="">All topics</option>
            {topics.map((topic) => {
              return <TopicOptions key={topic.slug} topic={topic} />;
            })}
          </select>
             <button onClick={handleFilter}>{filter ? "Close Filter" : "Open filter"}</button>
        {filter ?
            <>
          <label htmlFor="sort-by">Sort by: {}</label>
          <select onChange={handleSelectSortBy} id="sort-by" >
            <option value="created_at">date</option>
            <option value="comment_count">Comment count</option>
            <option value="votes">Votes</option>
          </select>

          <label htmlFor="order">order: {}</label>
          <select onChange={handleSelectOrder} id="order" >
            <option value="desc">Descending</option>
            <option value="asc">Ascending</option>
          </select>
          </> : null
}
          <ul className="article_container">
            {allArticles.map((article) => {
              return <ArticleCard key={article.article_id} article={article} />;
            })}
          </ul>
        </>
      )}
    </div>
  );
}