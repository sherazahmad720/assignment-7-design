import ServiceCard from "@/components/ServiceCard";
import React from "react";

export default function page() {
  let icons = [
    <svg
      key={1}
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fill-rule="evenodd"
        d="M4 5a2 2 0 00-2 2v8a2 2 0 002 2h12a2 2 0 002-2V7a2 2 0 00-2-2h-1.586a1 1 0 01-.707-.293l-1.121-1.121A2 2 0 0011.172 3H8.828a2 2 0 00-1.414.586L6.293 4.707A1 1 0 015.586 5H4zm6 9a3 3 0 100-6 3 3 0 000 6z"
        clip-rule="evenodd"
      />
    </svg>,
    <svg
      key={2}
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z" />
    </svg>,
    <svg
      key={3}
      xmlns="http://www.w3.org/2000/svg"
      className="h-7 w-7"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
    </svg>,
  ];
  return (
    <div className="flex justify-center items-stretch  w-auto max-w-none mt-14">
      <ServiceCard
        title="Photo Shoot"
        icon={icons[0]}
        description="Lorem ipsum dolor sit amet, consectetuer adipiscing elit."
      />
      <ServiceCard
        title="Title 2"
        icon={icons[1]}
        description="Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci Donec nec justo eget felis facilisis fermentum. Aliquam porttitor mauris sit amet orci."
      />
      <ServiceCard
        title="Title 3"
        icon={icons[2]}
        description="Praesent dapibus, neque id cursus faucibus, tortor neque egestas auguae."
      />
    </div>
  );
}
