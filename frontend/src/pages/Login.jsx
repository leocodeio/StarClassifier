import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <p className="text-white">This is the Home page</p>
      <Link to="/signup" className="text-white">
        Sign Up
      </Link>
    </div>
  );
};

export default Login;
