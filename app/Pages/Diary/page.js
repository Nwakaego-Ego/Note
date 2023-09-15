const diary = () => {
  return (
    <main className="px-20">
      <div className="flex flex-row justify-between pt-10 px-10">
        <div>
          <h1 className="font-extrabold text-darkEgo text-2xl mt-5">Diary</h1>
        </div>
        <div>
          <button className="m-5 bg-darkEgo  text-white  py-2 px-4 rounded">
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

      <div className=" bg-white mt-14 border  rounded">
        <button className="bg-orangeEgo text-white py-2 px-4 h-14 w-14 rounded-full">
          Ego
        </button>
        <p>Ego Nwaekpe</p>
        <p>I ma really tired i really need a vacation</p>
      </div>
    </main>
  );
};

export default diary;
