import "./App.css";
import Login from "./components/Login";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Register from "./components/Register";
import { useEffect, createContext, useState } from "react";
import axios from "axios";
import NavBar from "./components/NavBar";
import CreatePost from "./components/CreatePost";
import ProtectedRoute from "./components/ProtectedRoute";
import Post from "./components/Post";
import EditPost from "./components/EditPost";

export const userContext = createContext();
function App() {
  const [user, setUser] = useState({});

  const navigate = useNavigate();

  useEffect(() => {
    axios.defaults.withCredentials = true;
    axios
      .get("http://localhost:5000/")
      .then((user) => setUser(user.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <userContext.Provider value={user}>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <Home />
              </ProtectedRoute>
            }
          />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="/create"
            element={
              <ProtectedRoute>
                <CreatePost />
              </ProtectedRoute>
            }
          />
          <Route path="/post/:id" element={<Post />} />
          <Route path="/editpost/:id" element={<EditPost />} />
        </Routes>
      </userContext.Provider>
    </>
  );
}

export default App;
