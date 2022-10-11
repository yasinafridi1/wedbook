import React from "react";
import ListCard from "../cards/ListCard";
import img1 from "../../images/card/one.jpg";
import img2 from "../../images/card/two.jpg";
import img3 from "../../images/card/three.jpg";
const List = () => {

  const listData = [
    {
      name: "Jan Wedding halls",
      image: img1,
      location: "Bilour plazza,Sadr,Peshawar",
      rating: '4.3',
      reviewCount: '34',
      path: '/janweddinghall',
      price: '20000',
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates veniam laborum vel expedita rerum sit omnis placeat, nesciunt nam sunt."
    }, {
      name: "Jan Wedding hall 2",
      image: img2,
      location: "Bilour plazza,Sadr,Peshawar",
      rating: '4.3',
      reviewCount: '34',
      path: '/janweddinghall2',
      price: '20000',
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates veniam laborum vel expedita rerum sit omnis placeat, nesciunt nam sunt."
    },
    {
      name: "Jan Wedding halls 3",
      image: img3,
      location: "Bilour plazza,Sadr,Peshawar",
      rating: '4.3',
      reviewCount: '34',
      path: '/janweddinghall3',
      price: '20000',
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates veniam laborum vel expedita rerum sit omnis placeat, nesciunt nam sunt."
    },
    {
      name: "Jan Wedding halls 4",
      image: img1,
      location: "Bilour plazza,Sadr,Peshawar",
      rating: '4.3',
      reviewCount: '34',
      path: '/janweddinghall4',
      price: '20000',
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates veniam laborum vel expedita rerum sit omnis placeat, nesciunt nam sunt."
    },
    {
      name: "Jan Wedding halls 5",
      image: img2,
      location: "Bilour plazza,Sadr,Peshawar",
      rating: '4.3',
      reviewCount: '34',
      path: '/janweddinghall5',
      price: '20000',
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates veniam laborum vel expedita rerum sit omnis placeat, nesciunt nam sunt."
    },
    {
      name: "Jan Wedding halls 6",
      image: img3,
      location: "Bilour plazza,Sadr,Peshawar",
      rating: '4.3',
      reviewCount: '34',
      path: '/janweddinghall6',
      price: '20000',
      about: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Voluptates veniam laborum vel expedita rerum sit omnis placeat, nesciunt nam sunt."
    }
  ]

  return (
    <div className="border-gray py-12 gap-x-0 w-full grid grid-cols-1 xsm:grid-cols-1  xsm:gap-x-0 xl:grid-cols-1 2xl:grid-cols-1 xl:gap-x-0  gap-y-0 items-center transition-all ease-out duration-700">
      {
        listData.map(element => {
          return <ListCard data={element} />
        })
      }
    </div>
  );
};

export default List;
