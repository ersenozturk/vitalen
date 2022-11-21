import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
          <AppContextProvider>
            <AppRouter />
          </AppContextProvider>
  );
}

export default App;
