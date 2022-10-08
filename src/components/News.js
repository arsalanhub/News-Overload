import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const updateNews = async () => {
    props.setProgress(10);
    const url = `https://news-api-97mk.onrender.com/api/${props.category}`;
    setLoading(true);
    var data = await axios.get(url);
    props.setProgress(30);
    props.setProgress(70);

    setArticles(data.data);
    setTotalResults(data.data.length);
    setLoading(false);

    props.setProgress(100);
  };
  useEffect(() => {
    document.title = `${props.category} - NewsOverload`;
    updateNews();
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);
    const url = `https://news-api-97mk.onrender.com/api/${props.category}`;
    var data = await axios.get(url);
    setArticles(articles.concat(data.data));
    setTotalResults(data.data.length);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ margin: "35px", marginTop: "70px" }}>
        News Overload Top headlines on {props.category.toUpperCase()}
      </h1>
      {/* If loading is true then we execute below code */}
      {loading && <Spinner />}
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => {
              return (
                <div className="col-md-4" key={element.image}>
                  <NewsItem
                    title={element.title ? element.title : ""}
                    description={element.body ? element.body : ""}
                    imageUrl={element.image}
                  />
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: "in",
  pageSize: 10,
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string,
};

export default News;
