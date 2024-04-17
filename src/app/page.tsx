import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-white p-9 max-w-xs rounded-lg m-8">
      <h1>CSS Flex & Grid</h1>
      <p className="text-black">
        This book takes a completely different approach. I would not teach you the
        things flex and grid can do. Instead, I will first show you some
        components and layouts and make you think how to build them using the
        CSS concepts you already know. Now you have a problem, and you want a
        solution.
      </p>
      <div className="mt-4 flex justify-between">
        <a className="px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm" href="#"> Prev </a>
        <a className="px-4 py-2 bg-blue-200 rounded-md text-gray-900 text-sm"  href="#"> Next </a>
      </div>
    </div>
  );
}
