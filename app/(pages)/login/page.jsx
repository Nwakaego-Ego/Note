"use client";

import React, { useState } from "react";
import { toast } from "react-hot-toast";
import Image from "next/image";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useRouter } from "next/navigation";
import { auth } from "../../Config/firebase";
import { signInWithEmailAndPassword } from "firebase/auth";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Required"),
});

const Login = () => {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");

  const toggle = () => {
    setOpen(!open);
  };

  const signUp = () => {
    router.push("/register");
  };

  const handleReset = () => {
    router.push("/password");
  };

  const signIn = async (values) => {
    try {
      console.log("Trying to register user...");
      const user = await signInWithEmailAndPassword(
        auth,
        values.email,
        values.password
      );
      console.log(user);
      router.push("/diary");
      console.log("User registered successfully!");
    } catch (error) {
      console.error("Error registering user:", error.message);
      console.log(user);
      setError(Error);
      toast.error(error);
    }
  };

  // const signIn = async (values) => {
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       values.email,
  //       values.password
  //     );
  //     console.log(user);
  //     router.push("/diary");
  //     toast.success("Login successful!");
  //     console.log("User logged in successfully!");
  //   } catch (error) {
  //     console.error("Error logging in:", error.message);

  //     if (error.code === "auth/invalid-login-credentials") {
  //       // Handle invalid login credentials error
  //       toast.error("Invalid login credentials");
  //     } else {
  //       // Handle other errors
  //       toast.error("An error occurred while logging in");
  //     }

  //   }
  // };

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
              Login with your email address and password
            </p>
            <Formik
              initialValues={{ email: "", password: "" }}
              validationSchema={LoginSchema}
              onSubmit={signIn}
            >
              <Form>
                <div>
                  <label htmlFor="email" className="text-gray-700">
                    Email address
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="block rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-full lg:w-full"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <div className="flex flex-row justify-between">
                    <label htmlFor="age" className="text-gray-700">
                      Password
                    </label>
                    <label
                      onClick={handleReset}
                      htmlFor="age"
                      className=" text-skyblueEgo cursor-pointer"
                    >
                      Forget password
                    </label>
                  </div>
                  <Field
                    type={open ? "text" : "password"}
                    id="password"
                    name="password"
                    className="block rounded-md border bg-gray-100  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-full lg:w-full"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
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
                <span>{error}</span>
                <div>
                  <button
                    type="submit"
                    className="bg-skyblueEgo text-white py-2 px-4 rounded mt-5 w-full cursor-pointer"
                  >
                    Login
                  </button>
                </div>
                <p className="mt-1 text-gray-700">
                  Create an account to start using diary
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
