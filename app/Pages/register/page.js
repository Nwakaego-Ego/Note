const register = () => {
  return (
    <div>
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
    </div>
  );
};

export default register;
