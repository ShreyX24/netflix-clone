import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import ApolloWrapper from "./contexts/apollo-wrapper";
import { store } from "./redux/storeConfig";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <ApolloWrapper>
      <RouterProvider router={router} />
    </ApolloWrapper>
  </Provider>
  );
}

export default App;
