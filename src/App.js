import Quiz from "./components/Quiz/Quiz";
import { Provider } from "react-redux";
import store from "./store/index";

function App() {
  return (
    <Provider store={store}>
      <Quiz />
    </Provider>
  );
}

export default App;
