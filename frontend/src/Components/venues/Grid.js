import React from "react";
import GridCard from "../cards/GridCard";
import img1 from "../../images/card/one.jpg";
import img2 from "../../images/card/two.jpg";
import img3 from "../../images/card/three.jpg";

const Grid = () => {
  const allData = [{
    name: "Jan Wedding halls",
    image: img1,
    location: "Bilour plazza,Sadr,Peshawar",
    rating: '4.3',
    reviewCount: '34',
    path: '/janweddinghall',
    price: '20000'


  }, {
    name: "Jan Wedding hall 2",
    image: img2,
    location: "Bilour plazza,Sadr,Peshawar",
    rating: '4.3',
    reviewCount: '34',
    path: '/janweddinghall2',
    price: '20000'


  },
  {
    name: "Jan Wedding halls 3",
    image: img3,
    location: "Bilour plazza,Sadr,Peshawar",
    rating: '4.3',
    reviewCount: '34',
    path: '/janweddinghall3',
    price: '20000'


  },
  {
    name: "Jan Wedding halls 4",
    image: img1,
    location: "Bilour plazza,Sadr,Peshawar",
    rating: '4.3',
    reviewCount: '34',
    path: '/janweddinghall4',
    price: '20000'


  },
  {
    name: "Jan Wedding halls 5",
    image: img2,
    location: "Bilour plazza,Sadr,Peshawar",
    rating: '4.3',
    reviewCount: '34',
    path: '/janweddinghall5',
    price: '20000'
  },
  {
    name: "Jan Wedding halls 6",
    image: img3,
    location: "Bilour plazza,Sadr,Peshawar",
    rating: '4.3',
    reviewCount: '34',
    path: '/janweddinghall6',
    price: '20000'
  }]
  return (
    <div className="border-gray p-10 gap-x-4 w-full place-items-center grid grid-cols-1 xsm:grid-cols-3  xsm:gap-x-4 xl:grid-cols-3 2xl:grid-cols-4 xl:gap-x-2  gap-y-14 items-center transition-all ease-out duration-700">
      {
        allData.map(element => {
          return <GridCard data={element} />
        })
      }
    </div>
  );
};

export default Grid;
