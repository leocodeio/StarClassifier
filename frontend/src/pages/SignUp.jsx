import { Button, Checkbox, FloatingLabel, Label } from "flowbite-react";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <div className="flex flex-col gap-4 h-full w-full items-center justify-center">
      <form className="flex w-[300px] flex-col gap-4 bg-gray-600 p-4 rounded-lg">
        <div>
          <div className="mb-2 block">
            <FloatingLabel variant="standard" label="Your email" />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <FloatingLabel variant="standard" label="Your password" />
          </div>
        </div>
        <div>
          <div className="mb-2 block">
            <FloatingLabel variant="standard" label="Confirm password" />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox id="remember" />
          <Label htmlFor="remember">Remember me</Label>
        </div>
        <Button type="submit">Submit</Button>
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
