import { Button, FileInput, Label } from "flowbite-react";
import React, { useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";

const ImageInput = () => {
  const [image, setImage] = useState(null);
  const [result, setResult] = useState(null);

  // Log the selected image file
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!image) {
      toast.error("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image_data", image, image.name);
    // console.log(process.env.REACT_APP_ML_BACKEND_URL);
    try {
      const response = await axios.post(
        `${process.env.REACT_APP_ML_BACKEND_URL}/classify/`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
            accept: "application/json",
          },
        }
      );
      setResult(response.data);
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };

  return (
    <>
      {result ? (
        <div className="flex flex-col items-center mt-4 p-4 border border-gray-400 rounded-lg">
          <p className="text-white text-sm font-bold mb-2">
            Its {result.class} right !!, I knew it with certainty of{" "}
            {result.score}%
          </p>
          <Button onClick={() => setResult(null)}>Try another</Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-2 block">
            <Label
              className="text-white"
              htmlFor="file-upload"
              value="Upload an image"
            />
          </div>
          <FileInput
            id="file-upload"
            name="file-upload"
            accept="image/*" // Ensure the input accepts images only
            onChange={handleImageChange} // Handle file selection
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </>
  );
};

export default ImageInput;
