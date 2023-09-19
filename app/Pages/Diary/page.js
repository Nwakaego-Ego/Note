import { FaPaste, FaTrash } from "react-icons/fa";
import Image from "next/image";

const diary = () => {
  return (
    <main className="px-20">
      <div className="flex flex-row justify-between pt-10 ">
        <div>
          <h1 className="font-extrabold text-gray-600 text-2xl mt-5">Diary</h1>
        </div>
        <div>
          <button className="m-5 bg-gray-500  text-white  py-2 px-4 rounded-lg">
            Sign Out
          </button>
          <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full">
            Ego
          </button>
        </div>
      </div>
      <div className=" bg-white mt-14 border  rounded-xl">
        <div className="bg-greyEgo m-10 h-40 rounded p-5 text-gray-500">
          <div>what is on your mind</div>
        </div>
        <div className=" flex flex-row px-10 py-5 justify-between">
          <p className="mt-2 text-gray-500">0/300</p>
          <button className=" bg-gray-500  text-white  py-2 px-4 rounded">
            Save
          </button>
        </div>
      </div>

      <div className=" bg-white mt-14 border  rounded-xl ">
        <div className="p-8">
          <div className="flex flex-row mb-4">
            <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full ">
              Ego
            </button>
            <p className="mt-5 ml-5 text-gray-500">Ego Nwaekpe</p>
          </div>
          <p className="text-gray-500">I need a vacation</p>
          <div className="flex flex-row mt-10">
            <FaTrash className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10" />
            <FaPaste className="h-6 w-6 text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className=" bg-white mt-14 border  rounded-xl ">
        <div className="p-8">
          <div className="flex flex-row mb-4">
            <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full ">
              Ego
            </button>
            <p className="mt-5 ml-5 text-gray-500">Ego Nwaekpe</p>
          </div>
          <p className="text-gray-500">
            I am really tired i really need a vacation
          </p>
          <div className="flex flex-row mt-10">
            <FaTrash className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10" />
            <FaPaste className="h-6 w-6 text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default diary;
