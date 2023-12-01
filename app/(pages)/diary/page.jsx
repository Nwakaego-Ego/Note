// "use client";
// import React, { useState } from "react";
// import ResultCard from "../../components/resultcard";
// import Update from "../../components/update";
// import Delete from "../../components/del";
// import { useRouter } from "next/navigation";
// import { auth } from "../../Config/firebase";

// const diary = () => {
//   const router = useRouter();
//   const [notes, setNotes] = useState([]);
//   const [note, setNote] = useState("");
//   const [error, setError] = useState("");
//   const [modalopen, setModalOpen] = useState(false);
//   const [isDel, setIsDel] = useState(false);
//   const [selected, setSelected] = useState([]);
//   const [noteUpdate, setNoteUpdated] = useState("");

//   const signOut = async () => {
//     try {
//       await signOut(auth);
//       router.push("/");
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   const openModal = () => {
//     setModalOpen(true);
//   };

//   const closeModal = () => {
//     setModalOpen(false);
//   };

//   const openDelModal = () => {
//     setIsDel(true);
//   };

//   const closeDelModal = () => {
//     setIsDel(false);
//   };

//   const handleChange = (e) => {
//     setNote(e.target.value);
//   };

//   console.log(notes);

//   const delNotes = () => {
//     setNotes([]);
//   };

//   const delNote = () => {
//     const newNotes = notes.filter((item) => item.id !== selected);
//     setNotes(newNotes);
//     closeDelModal();
//   };

//   const updateNote = (index, updatedNote) => {
//     setNotes((prevNotes) => {
//       const updatedNotes = [...prevNotes];
//       updatedNotes[index] = { ...updatedNote, id: index + 1 };
//       console.log("Updated Notes:", updatedNotes);
//       return updatedNotes;
//     });
//     closeModal();
//   };

//   const saveNote = () => {
//     if (note === "") {
//       setError("Error.... add note");
//     } else {
//       const newNote = { id: notes.length + 1, note: note };

//       setNotes([...notes, newNote]);
//       setNote("");
//       setError("");
//     }
//   };

//   return (
//     <main className="px-20">
//       <div className="flex flex-row justify-between pt-10 ">
//         <div>
//           <h1 className="font-extrabold text-gray-600 text-2xl mt-5">Diary</h1>
//         </div>
//         <div>
//           <button
//             onClick={signOut}
//             className="m-5 bg-gray-500  text-white  py-2 px-4 rounded-lg"
//           >
//             Sign Out
//           </button>
//           <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full">
//             Ego
//           </button>
//         </div>
//       </div>
//       <div className=" bg-white mt-14 border w-full  rounded-xl h-80  relative">
//         <textarea
//           type="text"
//           id="text"
//           value={note}
//           className="bg-greyEgo m-10 h-40 rounded p-5 text-gray-500 lg:w-11/12 w-10/12"
//           onChange={(e) => setNote(e.target.value)}
//           placeholder="Enter note........"
//         />

//         <div className="flex flex-row px-10 py-5 justify-between relative bottom-8 ">
//           <p className="text-gray-500 mb-20">0/300</p>
//           <button
//             className="bg-gray-500 text-white h-10  px-8 mb-10 mr-4 rounded"
//             onClick={saveNote}
//           >
//             Save
//           </button>
//         </div>
//       </div>

//       {notes?.map((data) => {
//         return (
//           <div key={data.id}>
//             <ResultCard
//               note={data.note}
//               openModal={openModal}
//               openDelModal={openDelModal}
//               closeModal={closeModal}
//               setSelected={() => setSelected(data.id)}
//             />
//           </div>
//         );
//       })}

//       <Update
//         openModal={openDelModal}
//         closeModal={closeModal}
//         modalOpen={modalopen}
//         updateNote={updateNote}
//         selected={selected}
//         noteUpdate={noteUpdate}
//         setNoteUpdated={setNoteUpdated}
//       />

//       <Delete
//         openDelModal={openDelModal}
//         closeDelModal={closeDelModal}
//         isDel={isDel}
//         modalOpen={modalopen}
//         delNote={delNote}
//         delNotes={delNotes}
//       />
//     </main>
//   );
// };

// export default diary;
"use client";
import React, { useState } from "react";
import ResultCard from "../../components/resultcard";
import Update from "../../components/update";
import Delete from "../../components/del";
import { useRouter } from "next/navigation";
import { auth } from "../../Config/firebase";

const Diary = () => {
  const router = useRouter();
  const [notes, setNotes] = useState([]);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [modalopen, setModalOpen] = useState(false);
  const [isDel, setIsDel] = useState(false);
  const [selected, setSelected] = useState([]);
  const [noteUpdate, setNoteUpdated] = useState("");

  const signOut = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (err) {
      console.error(err);
    }
  };

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
    setNotes([]);
  };

  const delNote = () => {
    const newNotes = notes.filter((item) => item.id !== selected);
    setNotes(newNotes);
    closeDelModal();
  };

  const updateNote = (index, updatedNote) => {
    setNotes((prevNotes) => {
      const updatedNotes = [...prevNotes];
      updatedNotes[index] = { ...updatedNote, id: index + 1 };
      console.log("Updated Notes:", updatedNotes);
      return updatedNotes;
    });
    closeModal();
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
          <button
            onClick={signOut}
            className="m-5 bg-gray-500  text-white  py-2 px-4 rounded-lg"
          >
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
          className="bg-greyEgo m-10 h-40 rounded p-5 text-gray-500 lg:w-11/12 w-10/12"
          onChange={(e) => setNote(e.target.value)}
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
              setSelected={() => setSelected(data.id)}
            />
          </div>
        );
      })}

      <Update
        openModal={openDelModal}
        closeModal={closeModal}
        modalOpen={modalopen}
        updateNote={updateNote}
        selected={selected}
        noteUpdate={noteUpdate}
        setNoteUpdated={setNoteUpdated}
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

export default Diary;
