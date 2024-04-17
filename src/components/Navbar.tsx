import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <nav className="bg-orange-700 p-2">
      <ul className="flex gap-4 p-l-10">
        {/* <button onClick={() => alert("Hello")}>Click me!</button> */}
        <li>
          <Link href={"/"}>Task1</Link>
        </li>
        <li>
          <Link href={"/task2"}>Task2</Link>
        </li>
        <li>
          <Link href={"/task3"}>Task3</Link>
        </li>
        <li>
          <Link href={"/task4"}>Task4</Link>
        </li>
        <li>
          <Link href={"/task5"}>Task5</Link>
        </li>
        <li>
          <Link href={"/task6"}>Task6</Link>
        </li>
        <li>
          <Link href={"/task7"}>Task7</Link>
        </li>
      </ul>
    </nav>
  );
}
