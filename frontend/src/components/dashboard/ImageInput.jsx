import { Button, FileInput, Label } from "flowbite-react";
import React, { useState } from "react";

const ImageInput = () => {
  const [image, setImage] = useState(null);
  const [output, setOutput] = useState(false);

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setOutput(true);
    if (image && image.type.includes("image")) {
      console.log(image);
    }
  };
  return (
    <>
      {output ? (
        <button
          className="text-white text-2xl"
          onClick={() => setOutput(false)}
        >
          Output
        </button>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="mb-2 block">
            <Label className="text-white" htmlFor="file-upload" value="Upload file" />
          </div>
          <FileInput
            id="file-upload"
            name="file-upload"
            onChange={handleImageChange}
          />
          <Button type="submit">Submit</Button>
        </form>
      )}
    </>
  );
};

export default ImageInput;
