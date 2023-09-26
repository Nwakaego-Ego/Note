import Image from "next/image";
import { FaPaste, FaTrash } from "react-icons/fa";

const resultcard = (props) => {
  return (
    <div>
      <div className=" bg-white mt-14 border  rounded-xl ">
        <div className="p-8">
          <div className="flex flex-row mb-4">
            <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full ">
              Ego
            </button>
            <p className="mt-5 ml-5 text-gray-500">Ego Nwaekpe</p>
          </div>
          <p className="text-gray-500">{props.note}</p>
          <div className="flex flex-row mt-10">
            <FaTrash className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10" />
            <FaPaste className="h-6 w-6 text-gray-500 text-2xl cursor-pointer" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default resultcard;
