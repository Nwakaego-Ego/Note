"use client";
import { useState } from "react";
import ResultCard from "../../components/resultcard";
import Update from "../../components/update";
import Delete from "../../components/del";

const diary = () => {
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [modalopen, setModalOpen] = useState(false);
  const [isDel, setIsDel] = useState(false);
  const [selected, setSelected] = useState([]);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const openDelModal = () => {
    setIsDel(true);
  };

  const closeDelModal = () => {
    setIsDel(false);
  };

  const handleChange = (e) => {
    setNote(e.target.value);
  };

  console.log(notes);

  const delNotes = () => {
    setNotes("");
  };

  const delNote = () => {
    const newNote = notes.filter((note) => note.id !== selected);
    setNotes(newNote);
    closeDelModal();
  };

  const saveNote = () => {
    if (note === "") {
      setError("Error.... add note");
    } else {
      const newNote = { id: notes.length + 1, note: note };

      setNotes([...notes, newNote]);
      setNote("");
      setError("");
    }
  };

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
      <div className=" bg-white mt-14 border w-full  rounded-xl h-80  relative">
        <textarea
          type="text"
          id="text"
          value={note}
          className="bg-greyEgo m-10 h-40 rounded p-5 text-gray-500 lg:w-11/12 w-80"
          onChange={handleChange}
          placeholder="Enter note........"
        />

        <div className="flex flex-row px-10 py-5 justify-between relative bottom-8 ">
          <p className="text-gray-500 mb-20">0/300</p>
          <button
            className="bg-gray-500 text-white h-10  px-8 mb-10 mr-4 rounded"
            onClick={saveNote}
          >
            Save
          </button>
        </div>
      </div>

      {notes?.map((data) => {
        return (
          <div key={data.id}>
            <ResultCard
              note={data.note}
              openModal={openModal}
              openDelModal={openDelModal}
              closeModal={closeModal}
              setSelected={setSelected}
            />
          </div>
        );
      })}
      <Update
        openModal={openDelModal}
        closeModal={closeModal}
        modalOpen={modalopen}
      />
      <Delete
        openDelModal={openDelModal}
        closeDelModal={closeDelModal}
        isDel={isDel}
        modalOpen={modalopen}
        delNote={delNote}
        delNotes={delNotes}
      />
    </main>
  );
};

export default diary;
