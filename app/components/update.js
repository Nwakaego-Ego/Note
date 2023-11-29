import Modal from "react-modal";

const UpdateNote = (props) => {
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      transform: "translate(-50%, -50%)",
      width: "90%",
      maxWidth: "600px",
    },
  };

  return (
    <div>
      <Modal
        isOpen={props.modalOpen}
        onRequestClose={props.closeModal}
        style={customStyles}
      >
        <div>
          <button
            onClick={() => {
              props.closeModal();
            }}
            className="bg-skyblueEgo text-white h-10  px-8 mb-10 mr-4 rounded"
          >
            Discard
          </button>
          <textarea
            type="text"
            id="text"
            className="bg-greyEgo m-10 h-40 rounded p-5 text-gray-500 lg:w-10/12 w-96 "
            placeholder="Update note........"
          />
        </div>

        <div className="mid-section">
          <textarea type="text" id="name" className="input-text" />
          <div className="flex justify-between">
            <p>0/300</p>
            <button
              onClick={() => {
                props.UpdateNote(index, newValue);
              }}
              className="bg-skyblueEgo text-white h-10  px-8 mb-10 mr-4 rounded"
            >
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UpdateNote;
