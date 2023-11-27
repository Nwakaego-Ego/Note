"use client";
import React, { useState } from "react";
import Image from "next/image";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { auth } from "../../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  const router = useRouter();
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };

  const signUp = () => {
    router.push("/register");
  };

  const signIn = async (e) => {
    e.preventDefault();
    try {
      console.log("Trying to register user...");
      const user = await signInWithEmailAndPassword(
        auth,
        loginEmail,
        loginPassword
      );
      console.log(user);
      router.push("/diary");
      toast.success(response?.message);
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error.message);
    }
  };

  return (
    <div>
      <div className="flex flex-row justify-between pt-3 ">
        <div>
          <h1 className="font-extrabold text-gray-600 text-2xl mt-5 lg:ml-28 ml-20">
            Diary
          </h1>
        </div>
        <div>
          <button
            onClick={signUp}
            className="mt-5 mr-10 lg:mr-32 bg-skyblueEgo  text-white  py-2 px-4 rounded-lg"
          >
            Sign Up
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
            <h1 className="text-skyblueEgo font-bold text-2xl">Sign</h1>
            <p className="text-gray-700 mb-14">
              Login with your email adress and password
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
                  className="block rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full"
                  placeholder="Enter your email"
                  onChange={(e) => setLoginEmail(e.target.value)}
                />
              </div>
              <div>
                <div className="flex flex-row justify-between">
                  <label htmlFor="age" className="text-gray-700">
                    Password
                  </label>
                  <label htmlFor="age" className=" text-skyblueEgo">
                    Forget password
                  </label>
                </div>
                <input
                  type={open ? "text" : "password"}
                  id="password"
                  name="password"
                  className="block rounded-md border bg-gray-100  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-5/6 lg:w-full"
                  placeholder="Enter your password"
                  onChange={(e) => setLoginPassword(e.target.value)}
                />
              </div>
              {open ? (
                <FaEye
                  className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10"
                  onClick={toggle}
                />
              ) : (
                <FaEyeSlash
                  className="h-6 w-6 text-gray-500 text-2xl cursor-pointer mr-10"
                  onClick={toggle}
                />
              )}

              <div>
                <button
                  onClick={signIn}
                  className="bg-skyblueEgo w-5/6 text-white py-2 px-4 rounded mt-5 lg:w-full"
                >
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

export default Login;
