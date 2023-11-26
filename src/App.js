import Navbar from "./components/navbar/Navbar";
import Homepage from "./containers/Homepage";
import Events from "./containers/Events";
import About from "./containers/About";
import Donates from "./containers/Donates";

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <Homepage/>
      ),
    },
    {
      path: "/about",
      element: <About/>,
    },
    {
      path: "/events",
      element: <Events/>
    },
    {
      path: "/donates",
      element: <Donates/>
    }
  ]);
  return (
    <RouterProvider router={router} />
  );
}

export default App;
