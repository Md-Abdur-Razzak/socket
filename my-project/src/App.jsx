import { RouterProvider } from "react-router-dom";
import GravatiyPayment from "./Components/GravatiyPayment";
import Router from "./Components/Router/Router";
import Sockit from "./Sockit";
import SpcifiChate from "./SpcifiChate";
import { router } from "./Components/Router/NavigationRoute";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
const queryClient = new QueryClient()
function App() {

  return (
    <div>
      <QueryClientProvider client={queryClient}>
        <Router>
          <RouterProvider router={router}></RouterProvider>
        </Router>
      </QueryClientProvider>
    </div>
  );
}

export default App;
