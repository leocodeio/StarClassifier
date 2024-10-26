  import "./App.css";
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import SignUp from "./pages/SignUp";
  import Login from "./pages/Login";
  import Home from "./pages/Home";
  import Error from "./pages/Error";
  import Dashboard from "./pages/Dashboard";
  import AccountProvider from "./context/AccountContext";
  import { Toaster } from 'react-hot-toast';

  function App() {
    return (
      <div className="App">
        <AccountProvider>
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
        </AccountProvider>
      </div>
    );
  }

  export default App;
