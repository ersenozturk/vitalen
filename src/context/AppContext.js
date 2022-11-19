import { createContext } from "react";
import useFetch from "../hooks/useFetch";

//! create context
export const AppContext = createContext();

//! create provide
export const AppContextProvider = ({ children }) => {
  const {
    data: headerMovieArr,
    loading: headerMovieLoading,
    error: headerMovieError,
  } = useFetch(
    "https://api.themoviedb.org/3/movie/top_rated?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US&page=1"
  );

  const {
    data: headerTVArr,
    loading: headerTVLoading,
    error: headerTVError,
  } = useFetch(
    "https://api.themoviedb.org/3/tv/top_rated?api_key=300486eba1a4a782eeecb32a1d9d72f4&language=en-US&page=1"
  );

  const value = {
    headerMovieArr,
    headerMovieLoading,
    headerMovieError,
    headerTVArr,
    headerTVLoading,
    headerTVError,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

// function App() {
//   const { data: quote, loading, error } = useFetch(url)

//   return (
//     <div>
//       { loading && <p>{loading}</p> }
//       { quote && <p>"{quote}"</p> }
//       { error && <p>{error}</p> }
//     </div>
//   );
// }
