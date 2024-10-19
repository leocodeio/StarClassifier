import { Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
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
