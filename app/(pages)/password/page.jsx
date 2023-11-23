"use client";
import Image from "next/image";

const password = () => {
  return (
    <main>
      <div className="flex flex-row justify-between pt-10 ">
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
            src="/forget_pw.svg"
            alt="Note Image"
            width="500"
            height="300"
            layout="fit"
            objectFit="cover"
            className="relative bg-gradient-to-b  hidden lg:block
        from-darkBlue mt-14 mx-auto rounded-full   overflow-hidden"
          />
        </div>

        <div className="mt-8 ml-20  bg-white w-4/5 rounded-xl  lg:w-2/5 lg:h-96  lg:mr-32 lg:mt-14 ">
          <div className="p-5">
            <h1 className=" font-bold text-2xl text-gray-500">
              Forgot your password?
            </h1>
            <p className="text-gray-700 text-sm mt-3 mb-5">
              Dont worry, we got you covered, enter the email address associated
              with this account
            </p>
            <form>
              <div>
                <label htmlFor="email" className="text-gray-700">
                  Email address
                </label>
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="block rounded-md border  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full bg-gray-100"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <button className="bg-skyblueEgo w-5/6 text-white py-2 px-4 rounded mt-5 lg:w-full">
                  Login
                </button>
              </div>
              <p className="mt-1 text-gray-700">Go back to sign up</p>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
};

export default password;
