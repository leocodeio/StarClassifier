import { Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAccountContext } from "../context/AccountContext";
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { id, setId } = useAccountContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (id !== null) {
      navigate("/dashboard");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(email, password);

    await axios
      .post(`${process.env.REACT_APP_BACKEND_URL}/user/login`, {
        email,
        password,
      })
      .then((res) => {
        // console.log(res);
        setId(res.data.id);
        toast.success("Logged in Successfully")
        navigate("/dashboard");
      })
      .catch((error) => {
        toast.error(error.response.data.message);
      });
    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
      <form
        onSubmit={handleSubmit}
        className="flex w-[300px] flex-col gap-4 bg-gray-600 p-4 rounded-lg"
      >
        <div>
          <div className="mb-2 block">
            <FloatingLabel
              variant="standard"
              label="Your email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <FloatingLabel
              variant="standard"
              label="Your password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button className="text-white" type="submit">
          Submit
        </Button>
      </form>
      <Link to="/signup" className="text-white text-sm font-semibold">
        Don't have an account? Sign up
      </Link>
    </div>
  );
};

export default Login;
