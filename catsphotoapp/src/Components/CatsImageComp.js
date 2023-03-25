import React from "react";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

export default function CatsImageComp(props) {
  console.log("Hey selected", props.selectedBreed);
  const images = [
    {
      original: "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
      thumbnail: "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
    },
    {
      original: "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
      thumbnail: "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
    },
    {
      original: "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
      thumbnail: "https://cdn2.thecatapi.com/images/VZ3qFLIe3.jpg",
    },
  ];
  return (
    <div>
      <ImageGallery items={images} />;
    </div>
  );
}
