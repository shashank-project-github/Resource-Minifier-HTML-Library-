'use client';
import React from 'react';
import Link from 'next/link';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { enqueueSnackbar } from 'notistack';
import { useRouter } from 'next/navigation';
import useUserContext from "../../../context/userContext"


// import components

// login page

const Login = () => {

  const { setLoggedIn } = useUserContext();

  const router = useRouter();

  const loginValidationSchema = Yup.object().shape({
    email: Yup.string().required('Email is required').email('Email is Invalid'),
    password: Yup.string().required('Password is required')
  });

  // initialize formik
  const loginForm = useFormik({
    initialValues: {
      email: '',
      password: ''
    },
    onSubmit: (values) => {
      console.log(values);
      // send data to backend

      fetch('http://localhost:5000/user/authenticate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(values)
      }).then(res => {
        if (res.status === 200) {
          enqueueSnackbar('Login Successful', { variant: 'success' });
          res.json().then(data => {
            console.log(data);
            sessionStorage.setItem('user', JSON.stringify(data));
            setLoggedIn(true);
            router.push('/');
          })
        } else {
          enqueueSnackbar('Invalid Email or Password', { variant: 'error' });
        }
      }).catch(err => {
        console.log(err);
        enqueueSnackbar('Server Error', { variant: 'error' });
      })
    },
    validationSchema: loginValidationSchema
  })


  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 bg-orange-200 mt-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Welcome Back
          </h2>
          <form className="mx-auto max-w-lg rounded-lg border bg-orange-50 " onSubmit={loginForm.handleSubmit}>
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Email
                </label>
                <input
                  name="email"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  type="email"
                  placeholder="Your Email"
                  id="email"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.email}
                />
              </div>
              <div>
                <label
                  htmlFor="password"
                  className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
                >
                  Password
                </label>
                <input
                  name="password"
                  className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
                  type="password"
                  placeholder="Your Password"
                  id="password"
                  onChange={loginForm.handleChange}
                  value={loginForm.values.password}
                />
              </div>
              <button className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                Log in
              </button>
            </div>
            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">
                Don't have an account?{" "}
                <Link
                  href="/signup"
                  className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>



    </div>
  )
}

export default Login;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               