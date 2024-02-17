import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";

import Home from "./components/Home";
import LoginPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [{ index: true, element: <Home /> }],
  },
  {path:"/login",element:<LoginPage/>},
  {path:"/signup",element:<SignUpPage/>},
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
