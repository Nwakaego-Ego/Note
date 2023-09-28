import Modal from "react-modal";

const Delete = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "600px",
      height: "300px",
    },
  };

  return (
    <Modal
      isOpen={props.isDel}
      onRequestClose={props.closeDelModal}
      style={customStyles}
    >
      <div className="">
        <div>
          <h3 className="text-center mt-16 text-2xl font-bold">
            Are you sure you want to{" "}
            <span className="block"> delete this note</span>
          </h3>
        </div>

        <div className="flex justify-between">
          <button
            className="text-skyblueEgo border border-skyblueEgo h-12  px-8  rounded-lg mt-16 w-40"
            onClick={() => {
              props.closeDelModal();
            }}
          >
            No, go back
          </button>
          <button
            className="border bg-red-500 text-white h-10  px-8  rounded-lg mt-16 w-40"
            onClick={() => {
              props.delNote();
            }}
          >
            Yes, delete
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default Delete;
