import React from "react";

export default function page() {
  return (

    <div className="m-14 flex items-center bg-white rounded-md p-3 max-w-xs">
      <img
        className="w-20 h-20 object-cover rounded-full mr-4"
        src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=80"
      />
      <div className="">
        <h3 className="font-bold text-xl text-black">Sherazi</h3>
        <p className="text-gray-600">Flutter Developer</p>
      </div>
    </div>
  );
}
