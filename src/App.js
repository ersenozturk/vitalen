import "./App.css";
import { AppContextProvider } from "./context/AppContext";
import AppRouter from "./routers/AppRouter";

function App() {
  return (
    <div>
      <AppContextProvider>
        <AppRouter />
      </AppContextProvider>
    </div>
  );
}

export default App;
