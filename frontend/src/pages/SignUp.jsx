import { Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAccountContext } from "../context/AccountContext";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
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
    if (password !== confirmPassword) {
      alert("Passwords do not match");
      return;
    }
    // console.log(email, password);
    // console.log(process.env.REACT_APP_BACKEND_URL);
    try {
      await axios
        .post(`${process.env.REACT_APP_BACKEND_URL}/user/register`, {
          email,
          password,
        })
        .then((res) => {
          // console.log(res);
          setId(res.data.id);
          navigate("/dashboard");
        });
    } catch (error) {
      console.error("Signup error:", error);
    }
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
              className="text-white"
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
              className="text-white"
            />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <FloatingLabel
              variant="standard"
              label="Confirm password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              value={confirmPassword}
              className="text-white"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button className="text-white " type="submit">
          Submit
        </Button>
      </form>
      <Link
        to="/login"
        className="text-white text-sm font-semibold font-calibri"
      >
        Already have an account? Login
      </Link>
    </div>
  );
};

export default SignUp;
