import { createContext } from "react";
import useFetch from "../hooks/useFetch";

//! create context
export const AppContext = createContext();

//! create provide
export const AppContextProvider = ({ children }) => {
  const API_KEY = process.env.REACT_APP_TMDB_KEY;

  const {
    data: headerMovieArr,
    loading: headerMovieLoading,
    error: headerMovieError,
  } = useFetch(
    `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  const {
    data: headerTVArr,
    loading: headerTVLoading,
    error: headerTVError,
  } = useFetch(
    `https://api.themoviedb.org/3/tv/top_rated?api_key=${API_KEY}&language=en-US&page=1`
  );

  const value = {
    API_KEY,
    headerMovieArr,
    headerMovieLoading,
    headerMovieError,
    headerTVArr,
    headerTVLoading,
    headerTVError,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
