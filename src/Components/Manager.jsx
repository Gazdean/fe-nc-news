import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import fetchAllArticles from "../utils/api-utils";
import Articles from "./Articles";

export default function Manager() {
  const [allArticles, setAllArticles] = useState([]);

  useEffect(() => {
    fetchAllArticles()
      .then((allArticles) => {
        setAllArticles(allArticles);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  return (
    <>
      <Articles allArticles={allArticles} />
    </>
  );
}
