import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import FetchAllArticles from "../utils/api-utils";
import Articles from "./Articles";

export default function Manager() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    FetchAllArticles().then((allArticles) => {
      setAllArticles(allArticles);
    });
  }, []);
  return (
    <>
      <Articles allArticles={allArticles} />
    </>
  );
}
