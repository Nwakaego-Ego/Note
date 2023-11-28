"use client";
import React from "react";
import Image from "next/image";
import { auth } from "../../Config/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";
import Link from "next/link";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name should be at least 2 characters")
    .required("Required"),
  email: Yup.string().email("Invalid email address").required("Required"),
  password: Yup.string()
    .min(6, "Password should be at least 6 characters")
    .required("Required"),
});

const Register = () => {
  const router = useRouter();

  const signIn = () => {
    router.push("/");
  };

  const registerUser = async (values) => {
    try {
      console.log("Trying to register user...");
      await createUserWithEmailAndPassword(auth, values.email, values.password);
      router.push("/");
      toast.success("User registered successfully!");
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
            <Formik
              initialValues={{ name: "", email: "", password: "" }}
              validationSchema={RegisterSchema}
              onSubmit={registerUser}
            >
              <Form>
                <div className="mt-6">
                  <label htmlFor="name" className="text-gray-700">
                    Full name:
                  </label>
                  <Field
                    type="text"
                    id="name"
                    name="name"
                    className="block rounded-md border bg-gray-100  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-full"
                    placeholder="Enter your full name"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="text-gray-700">
                    Email address
                  </label>
                  <Field
                    type="text"
                    id="email"
                    name="email"
                    className="block rounded-md border bg-gray-100 border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-full"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="password" className="text-gray-700">
                    Password
                  </label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="block rounded-md border bg-gray-100  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-full"
                    placeholder="Enter your password"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>
                <div>
                  <button
                    type="submit"
                    className="bg-skyblueEgo  text-white py-2 px-4 rounded mt-5 w-full"
                  >
                    Register
                  </button>
                </div>
                <p
                  onClick={signIn}
                  className="mt-1 text-gray-700 cursor-pointer"
                >
                  Already own an account{" "}
                  <span className="text-skyblueEgo">Sign in</span>
                </p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
