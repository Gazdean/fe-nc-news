import { useState, useEffect } from "react";

import ArticleCard from "./ArticleCard";
import { fetchAllArticles, fetchTopics } from "../utils/api-utils";
import TopicOptions from "./TopicOptions";
import { useNavigate, useSearchParams } from "react-router-dom";
import ShareButtons from "./ShareButtons";

export default function Articles() {
  const [allArticles, setAllArticles] = useState([]);
  const [topics, setTopics] = useState([]);
  const [selectedTopicRoute, setSelectedTopicRoute] = useState("/");
  const [isLoading, setIsLoading] = useState(true);
  const [articlesToRender, setArticlesToRender] = useState();

  const navigate = useNavigate();
  const [searchParams, setSearchParams] = useSearchParams();

  const topicSearchParam = searchParams.get("topic");

  useEffect(() => {
    fetchAllArticles(topicSearchParam)
      .then((receivedArticles) => {
        setAllArticles(receivedArticles);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [topicSearchParam]);

  useEffect(() => {
    fetchTopics()
      .then((topics) => {
        setTopics(topics);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  function handleSelectTopic(event) {
    console.log(event.target.value, "llll")
    setSelectedTopicRoute(event.target.value);
  }

  useEffect(() => {
    navigate(selectedTopicRoute);
  }, [selectedTopicRoute]);

  return (
    <div>
      <ShareButtons />
      {isLoading ? (
        <p>...your articles are loading</p>
      ) : (
        <>
         
          <label htmlFor="topics">Pick a topic</label>
          <select
            onChange={handleSelectTopic}
            id="topics"
          >
            <option value="/">All topics</option>
            {topics.map((topic) => {
              return <TopicOptions key={topic.slug} topic={topic} />;
            })}
          </select>

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
