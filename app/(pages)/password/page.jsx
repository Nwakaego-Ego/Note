"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../../Config/firebase";

const Password = () => {
  const router = useRouter();

  const signIn = () => {
    router.push("/");
  };

  const PasswordResetSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Required"),
  });

  const forgetPassword = async (values) => {
    try {
      console.log("Trying to send an email...");
      await sendPasswordResetEmail(auth, values.email);
      alert("Check your email");
      console.log("Password reset email sent successfully!");
    } catch (error) {
      console.error("Error sending password reset email:", error.message);
      alert(error.code);
    }
  };

  return (
    <main>
      <nav className="flex flex-row justify-between pt-10 ">
        <div>
          <h1 className="font-extrabold text-gray-600 text-2xl mt-5 lg:ml-28 ml-20">
            Diary
          </h1>
        </div>
        <div>
          <button
            onClick={signIn}
            className="mt-5 mr-10 lg:mr-32 bg-skyblueEgo text-white py-2 px-4 rounded-lg"
          >
            Sign In
          </button>
        </div>
      </nav>

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
            {/* <p className="text-gray-700 text-sm mt-3 mb-5">
              Dont worry, we got you covered. Enter the email address associated
              with this account.
            </p> */}
            <p className="text-gray-700 text-sm mt-3 mb-5">
              Don&apos;t worry, we got you covered. Enter the email address
              associated with this account.
            </p>

            <Formik
              initialValues={{ email: "" }}
              validationSchema={PasswordResetSchema}
              onSubmit={forgetPassword}
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
                    className="block rounded-md border  border-gray-300 focus:outline-none focus:border-skyblueEgo my-4 h-10 pl-5 w-full bg-gray-100"
                    placeholder="Enter your email"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-500 text-sm"
                  />
                </div>

                <div>
                  <button
                    type="submit"
                    className="bg-skyblueEgo  text-white py-2 px-4 rounded mt-5 w-full"
                  >
                    Reset Password
                  </button>
                </div>
                <p className="mt-1 text-gray-700">Go back to sign up</p>
              </Form>
            </Formik>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Password;
