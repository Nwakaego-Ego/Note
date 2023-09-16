import { FaPaste, FaTrash } from "react-icons/fa";
import Image from "next/image";

const diary = () => {
  return (
    <main className="px-20">
      <div className="flex flex-row justify-between pt-10 px-10">
        <div>
          <h1 className="font-extrabold text-darkEgo text-2xl mt-5">Diary</h1>
        </div>
        <div>
          <button className="m-5 bg-darkEgo  text-white  py-2 px-4 rounded-lg">
            Sign Out
          </button>
          <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full">
            Ego
          </button>
        </div>
      </div>
      <div className=" bg-white mt-14 border  rounded">
        <div className="bg-greyEgo m-10 h-40 rounded">
          <div>what is on your mind</div>
        </div>
        <div className=" flex flex-row px-10 py-5 justify-between">
          <p className="mt-2">0/300</p>
          <button className=" bg-darkEgo  text-white  py-2 px-4 rounded">
            Save
          </button>
        </div>
      </div>

      <div className=" bg-white mt-14 border  rounded-lg ">
        <div className="p-8">
          <div className="flex flex-row mb-4">
            <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full ">
              Ego
            </button>
            <p className="mt-5 ml-5">Ego Nwaekpe</p>
          </div>
          <p>I need a vacation</p>
          <div className="flex flex-row mt-10">
            <FaTrash className="h-6 w-6 text-darkEgo text-2xl cursor-pointer mr-10" />
            <FaPaste className="h-6 w-6 text-darkEgo text-2xl cursor-pointer" />
          </div>
        </div>
      </div>

      <div className=" bg-white mt-14 border  rounded-lg ">
        <div className="p-8">
          <div className="flex flex-row mb-4">
            <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full ">
              Ego
            </button>
            <p className="mt-5 ml-5">Ego Nwaekpe</p>
          </div>
          <p>I ma really tired i really need a vacation</p>
          <div className="flex flex-row mt-10">
            <FaTrash className="h-6 w-6 text-darkEgo text-2xl cursor-pointer mr-10" />
            <FaPaste className="h-6 w-6 text-darkEgo text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default diary;
