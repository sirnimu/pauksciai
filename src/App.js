import Quiz from "./components/Quiz/Quiz";
import { Provider } from "react-redux";
import store from "./store/index";
import Navigation from "./components/Navigation";
import Page from "./components/Page";

function App() {
  return (
    <Provider store={store}>
      <Page>
        <Navigation />
        <Quiz />
      </Page>
    </Provider>
  );
}

export default App;
