import React from "react";

export default function ServiceCard({
  title,
  icon,
  description,
}: any) {
  return (
    <div className="max-w-xs bg-white mx-5 px-8 py-10 rounded-lg shadow-md text-center text-black">
      <span className="inline-block p-4 rounded-full bg-teal-500 text-white">
        {icon}
      </span>
      <h2 className="mt-4 font-bold text-2xl">{title}</h2>
      <p className="mt-4">{description}</p>
    </div>
  );
}
