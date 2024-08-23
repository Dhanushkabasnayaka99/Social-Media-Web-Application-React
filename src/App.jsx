import "./App.css";
import "./Style.scss";
import LeftBar from "./components/left/LeftBar";
import RightBar from "./components/right/Right";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
} from "react-router-dom";
import Login from "./pages/Loign/Login";
import Register from "./pages/Register/Register";
import Home from "./pages/Home/Home";
import Profile from "./pages/Profile/Profile";
import Navbar from "./components/navbar/Navbar";
import { useContext } from "react";
import { DarkModeContext } from "./Context/darkMode";
import { AuthContext } from "./Context/AuthContext.jsx";

function App() {
  const { currentUser } = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);

  const Layout = () => {
    return (
      <div
        className={`theme-${darkMode ? "dark" : "light"}`}
        style={{ display: "flex", flexDirection: "column" }}
      >
        <Navbar />
        <div style={{ display: "flex", top: "50px" }}>
          <LeftBar />
          <div style={{ display: "flex", flex: 6 }}>
            <Outlet />
          </div>
          <RightBar />
        </div>
      </div>
    );
  };

  const ProtectedRoute = ({ children }) => {
   
    console.log("Current User:", currentUser); // Debugging line

    if (!currentUser) {
      console.log("Not authenticated, redirecting to login");
      return <Navigate to="/login" />;
    } else {
      return children;
    }
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <ProtectedRoute>
          <Layout />
        </ProtectedRoute>
      ),
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/profile/:id",
          element: <Profile />,
        },
      ],
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/login",
      element: <Login />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
