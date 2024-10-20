import React, { useEffect } from "react";
import Slider from "../components/dashboard/Slider";
import ImageInput from "../components/dashboard/ImageInput";
import { useAccountContext } from "../context/AccountContext";
import { useNavigate } from "react-router-dom";
import Header from "../components/common/Header";

const Dashboard = () => {
  const { id } = useAccountContext();
  const navigate = useNavigate();

  useEffect(() => {
    if (id === null) {
      navigate("/");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id]);
  return (
    <>
      <Header />
      <div className="h-full flex gap-4 md:flex-row flex-col items-center justify-center gap-10 md:gap-[150px]">
        <Slider />
        <ImageInput />
      </div>
    </>
  );
};

export default Dashboard;
