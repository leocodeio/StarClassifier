import React from "react";
import Slider from "../components/dashboard/Slider";
import ImageInput from "../components/dashboard/ImageInput";

const Dashboard = () => {
  return (
    <>
      <div className="h-full flex gap-4 md:flex-row flex-col items-center justify-center gap-10 md:gap-[150px]">
        <Slider />
        <ImageInput />
      </div>
    </>
  );
};

export default Dashboard;
