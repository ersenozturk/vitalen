import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    // <div id="wrapperOut">
    //   <div id="wrapperInner">
    //     <div id="wrapper">
          <AppContextProvider>
            <AppRouter />
          </AppContextProvider>
    //     </div>
    //   </div>
    // </div>
  );
}

export default App;
