import Image from "next/image";

const register = () => {
  return (
    <div>
      <div className="flex flex-row justify-between pt-3 ">
        <div>
          <h1 className="font-extrabold text-gray-600 text-2xl mt-5 lg:ml-28 ml-20">
            Diary
          </h1>
        </div>
        <div>
          <button className="mt-5 mr-10 lg:mr-32 bg-skyblueEgo  text-white  py-2 px-4 rounded-lg">
            Sign In
          </button>
        </div>
      </div>

      <div className="lg:flex lg:flex-row ">
        <div className="flex justify-center items-center mx-auto">
          <Image
            src="/ladycomputer.svg"
            alt="Note Image"
            width="500"
            height="300"
            layout="fit"
            objectFit="cover"
            className="relative bg-gradient-to-b  hidden lg:block
        from-darkBlue mt-14 mx-auto rounded-full   overflow-hidden"
          />
        </div>

        <div className="mt-8 ml-20  bg-white w-4/5 rounded-xl  lg:w-2/5 lg:mr-32 lg:mt-14">
          <div className="p-5">
            <h1 className="text-skyblueEgo font-bold text-2xl">Register</h1>
            <p className="text-gray-700">
              Create an account to start using diary
            </p>
            <form>
              <div className="mt-6">
                <label htmlFor="name" className="text-gray-700">
                  Full name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="block rounded-md border bg-gray-100  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full"
                  placeholder="Enter your full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="block rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="age" className="text-gray-700">
                  Password
                </label>
                <input
                  type="number"
                  id="password"
                  name="password"
                  className="block rounded-md border bg-gray-100  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full"
                  placeholder="Enter your password"
                />
              </div>
              <div>
                <button className="bg-skyblueEgo w-5/6 text-white py-2 px-4 rounded mt-5 lg:w-full">
                  Login
                </button>
              </div>
              <p className="mt-1 text-gray-700">
                Create an account to start using diary
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default register;
