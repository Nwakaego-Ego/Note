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
            value={props.noteUpdate}
            className="bg-greyEgo m-10 h-40 rounded p-5 text-gray-500 lg:w-10/12 w-96 "
            onChange={(e) => props.setNoteUpdated(e.target.value)}
            placeholder="Update note........"
          />
        </div>

        <div className="mid-section">
          <textarea type="text" id="name" className="input-text" />
          <div className="flex justify-between">
            <p>0/300</p>
            {/* <button
              onClick={() => {
                props.updateNote(index, newValue);
                props.closeModal();
              }}
              className="bg-skyblueEgo text-white h-10  px-8 mb-10 mr-4 rounded"
            >
              Update
            </button> */}
            <button
              onClick={() => {
                // Call the updateNote function when the button is clicked
                props.updateNote(props.selected - 1, {
                  note: props.noteUpdate, // Use the value entered by the user
                });
              }}
              className="bg-skyblueEgo text-white h-10 px-8 mb-10 mr-4 rounded"
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
