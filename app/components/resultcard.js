import { FaEdit, FaTrash } from "react-icons/fa";

const ResultCard = (props) => {
  return (
    <div>
      <div className="bg-white mt-14 border rounded-xl">
        <div className="p-8">
          <div className="flex flex-row mb-4">
            <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full">
              Ego
            </button>
            <p className="mt-5 ml-5 text-gray-500">Ego Nwaekpe</p>
          </div>
          <p className="text-gray-500">{props.note}</p>
          <div className="flex flex-row mt-10">
            <button
              onClick={() => {
                props.openDelModal();
                // props.setSelected(props.id);
                props.setSelected();
              }}
            >
              <FaTrash className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10" />
            </button>
            <button
              onClick={() => {
                props.openModal();
              }}
              // className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
            >
              <FaEdit className="h-6 w-6 text-gray-500 text-2xl cursor-pointer" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
