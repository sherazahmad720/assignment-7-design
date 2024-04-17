import React from "react";

export default function page() {
  return (
    <div className="flex bg-white justify-center ">
      <div className="w-auto max-w-none m-14 flex">
        <div className="text-center px-6 py-4">
          <img
            className="w-32 h-32 object-cover rounded-full object-top"
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          />
          <h3 className="font-bold text-xl">Alina</h3>
          <p className="text-sm text-gray-600">Founder & CEO</p>
        </div>
        <div className="text-center px-6 py-4">
          <img
            className="w-32 h-32 object-cover rounded-full object-top"
            src="https://images.pexels.com/photos/697509/pexels-photo-697509.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          />
          <h3 className="font-bold text-xl">Faizan</h3>
          <p className="text-sm text-gray-600">CTO</p>
        </div>
        <div className="text-center px-6 py-4">
          <img
            className="w-32 h-32 object-cover rounded-full object-top"
            src="https://images.pexels.com/photos/7242908/pexels-photo-7242908.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150"
          />
          <h3 className="font-bold text-xl">Aliza</h3>
          <p className="text-sm text-gray-600">Manager</p>
        </div>
        <div className="text-center px-6 py-4">
          <img
            className="w-32 h-32 object-cover rounded-full object-top"
            src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&h=300"
          />
          <h3 className="font-bold text-xl">Asif</h3>
          <p className="text-sm text-gray-600">Developer</p>
        </div>
      </div>
    </div>
  );
}
