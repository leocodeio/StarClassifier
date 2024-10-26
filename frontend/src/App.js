  import "./App.css";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import SignUp from "./pages/SignUp";
  import Login from "./pages/Login";
  import Home from "./pages/Home";
  import Error from "./pages/Error";
  import Dashboard from "./pages/Dashboard";
  import { Toaster } from 'react-hot-toast';
  import { useAccountContext } from "./context/AccountContext";
  import axios from "axios";
  import { useEffect } from "react";

function App() {

  const { id, setId } = useAccountContext();

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get(`${process.env.REACT_APP_BACKEND_URL}/user/me`, { 
          withCredentials: true
        });
        setId(data.user._id);
      } catch (error) {
        setId(null);
      }
    };

    fetchUserData();
  }, [id]);

  return (
      <div className="App">
          <BrowserRouter>
            <Toaster position="top-right" duration={4000} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/login" element={<Login />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="*" element={<Error />} />
            </Routes>
          </BrowserRouter>
      </div>
    );
  }

  export default App;
