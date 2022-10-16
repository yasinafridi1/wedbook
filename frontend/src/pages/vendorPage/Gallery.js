import React from "react";
import img1 from "../../images/venues.jpg";

const Gallery = () => {
  return (
    <>
      <div className="gallery ml-10 bg-slate-50">
        <h1 className="pl-2 py-3 border_b font-bold text-xl">Gallery</h1>
        <div className="px-16 py-4 flex flex-row">
          <div className="flex flex-col h-full">
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="Image_height mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
          </div>
          <div className="flex flex-col h-full">
            <div className="Image_height mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
            <div className="Image_width mr-4 mb-6">
              <img
                className="h-full w-full"
                src={img1}
                alt="image1"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
