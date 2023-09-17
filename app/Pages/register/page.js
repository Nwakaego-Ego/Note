import Image from "next/image";

const register = () => {
  return (
    <div>
      <div className="flex flex-row justify-between pt-10 px-10">
        <div>
          <h1 className="font-extrabold text-darkEgo text-2xl mt-5">Diary</h1>
        </div>
        <div>
          <button className="m-5 bg-darkEgo  text-white  py-2 px-4 rounded-lg">
            Sign In
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-row ">
        <div className=" mx-auto">
          <Image
            src="/ladycomputer.svg"
            alt="Note Image"
            width="600"
            height="450"
            layout="fit"
            objectFit="cover"
            className="relative bg-gradient-to-b  hidden lg:block
        from-darkBlue mt-14 mx-auto rounded-full  w-96 h-96 lg:w-96 lg:h-96 overflow-hidden"
          />
        </div>

        <div className="mt-20">
          <h1 className="text-skyblueEgo font-bold text-2xl">Register</h1>
          <p>Create an account to start using diary</p>
          <form>
            <div className="mt-6">
              <label htmlFor="name">Full name:</label>
              <input type="text" id="name" name="name" />
            </div>
            <div>
              <label htmlFor="email">Email address</label>
              <input type="text" id="email" name="email" />
            </div>
            <div>
              <label htmlFor="age">Password</label>
              <input type="number" id="age" name="age" />
            </div>
            <div>
              <button className="bg-orangeEgo text-white py-2 px-4 rounded">
                Button
              </button>
            </div>
            <p>Create an account to start using diary</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default register;
