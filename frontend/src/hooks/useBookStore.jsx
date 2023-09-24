import { useState, useEffect } from "react";
import { axiosInstance } from "../api";

import { useStore } from "../store";

const useBookStore = (initialSearchQuery) => {
  const [searchQuery, setSearchQuery] = useState(initialSearchQuery);
  const [page, setPage] = useState(1);
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const [totalResults, setTotalResults] = useState(0);

  const setBooks = useStore((state) => state.setBooks);

  const fetchSearchResults = async () => {
    try {
      if (searchQuery) {
        setLoading(true);
        const response = await axiosInstance.get("/books", {
          params: {
            page: page,
            limit: 6,
            searchValue: searchQuery,
          },
        });

        // eslint-disable-next-line no-unused-vars
        const { next, previous, totalResults, books } = response.data;

        setResults((prevResults) => [...prevResults, ...books]);
        setBooks(results);
        setTotalResults(totalResults);

        if (next) {
          setPage(next);
        } else {
          setHasMore(false);
        }
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSearchResults();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchQuery]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const target = entries[0];
        if (target.isIntersecting && hasMore && !loading) {
          fetchSearchResults();
        }
      },
      { threshold: 1 }
    );

    if (results.length > 0) {
      const lastResult = document.querySelector(".result:last-child");
      if (lastResult) {
        observer.observe(lastResult);
      }
    }

    return () => observer.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [results, hasMore, loading]);

  const submitSearchQuery = (newSearchQuery) => {
    setSearchQuery(newSearchQuery);
    setPage(1);
    setResults([]);
    setHasMore(true);
    // clearBooks();
  };

  return { results, loading, totalResults, submitSearchQuery };
};

export default useBookStore;
