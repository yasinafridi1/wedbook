import React from "react";

const Provide = () => {
  const Items1 = [
    "AC",
    "Food",
    "Stage decoration",
    "Dj",
    "Photography",
    "Heater",
  ];
  const Items2 = [
    "Separate washroom",
    "Wide Parking Area",
    "Separate Section",
    "Guest Capacity: 200 - 350 Female",
    "Guest Capacity: 200 - 350 Male",
    "Waiter:15",
  ];
  return (
    <>
      <div className="width h-60 my-8 bg-slate-50">
        <h1 className="pl-2 py-3 border_b font-bold text-xl">
          What are provide?
        </h1>
        <div className="flex justify-between w-full px-6 py-4">
          <div>
            <ul>
              {Items1.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {Items2.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default Provide;
