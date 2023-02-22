import { useState } from "react";
import "../Styles/sliderFunction.css";

const SliderFunction = () => {
  const [currentImage, setcurrentImage] = useState(0);

  const sliderImages = [
    {
      id: 1,
      imgsrc:
        "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f9857de8342_photo-1442347504183-965bd14449ac.jpg",
      alt: "Image1",
    },
    {
      id: 2,
      imgsrc:
        "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f0ea0de8344_photo-1433878455169-4698e60005b1.jpg",
      alt: "Image2",
    },
    {
      id: 3,
      imgsrc:
        "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f5e3ede8340_photo-1441906363162-903afd0d3d52.jpg",
      alt: "Image3",
    },
    {
      id: 4,
      imgsrc:
        "https://assets.website-files.com/5e4b1929fccc7f96f6de825d/5e4b1929fccc7f1017de8349_photo-1433155327100-12aac6a14ff1.jpg",
      alt: "Image4",
    },
    {
      id: 5,
      imgsrc:
        "https://assets.website-files.com/5e4b1929fccc7f2575de825e/5e4b1929fccc7fd4d0de82b2_photo-1439189741837-58720e8d82d5.jpg",
      alt: "Image5",
    },
  ];

  const HandleNextClick = () => {
    const newImage =
      currentImage === sliderImages.length - 1 ? 0 : currentImage + 1;
    setcurrentImage(newImage);
  };

  const HandlePrevClick = () => {
    const newImage =
      currentImage === 0 ? sliderImages.length - 1 : currentImage - 1;
    setcurrentImage(newImage);
  };

  return (
    <div>
      <div className="image-slider-container">
        <img
          src={sliderImages[currentImage].imgsrc}
          alt={sliderImages[currentImage].alt}
          className="image-slide"
        ></img>
        <button className="nextButton" onClick={HandleNextClick}>
          Next
        </button>
        <button className="prevButton" onClick={HandlePrevClick}>
          Previous
        </button>
      </div>
    </div>
  );
};

export default SliderFunction;