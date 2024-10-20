import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white h-screen flex flex-col items-center justify-center text-center font-sans p-4">
      Welcome - developed by catalyst community -<b>@leocodeio</b>
      <Link
        className="text-white border border-2 border-white px-2 py-1 mt-4   rounded"
        to="/signup"
      >
        Sign Up
      </Link>
    </div>
  );
};

export default Home;
