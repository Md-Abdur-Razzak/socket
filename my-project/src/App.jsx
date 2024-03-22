import { RouterProvider } from "react-router-dom";
import GravatiyPayment from "./Components/GravatiyPayment";
import Router from "./Components/Router/Router";
import Sockit from "./Sockit";
import SpcifiChate from "./SpcifiChate";
import { router } from "./Components/Router/NavigationRoute";


function App() {

  return (
  <Router>
    <RouterProvider router={router}></RouterProvider>
  </Router>
  );

}

export default App;
