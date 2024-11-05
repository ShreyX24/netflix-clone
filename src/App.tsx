import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./router/router";
import ApolloWrapper from "./contexts/apollo-wrapper";

function App() {
  return (
    <ApolloWrapper>
      <RouterProvider router={router} />
    </ApolloWrapper>
  );
}

export default App;
