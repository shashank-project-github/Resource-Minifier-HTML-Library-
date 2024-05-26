'use client';
import { useFormik } from 'formik';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react'
import * as Yup from 'yup'
// import './signupmodule.css'

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(10, 'Too Long!')
    .required('Required'),

  email: Yup.string().email('Invalid email').required('Required'),
  password: Yup
    .string()
    .required('Please Enter your password'),

  cPassword: Yup.string()
    .oneOf([Yup.ref('password'), null], 'Passwords must match')
});

const Signup = () => {

  const router = useRouter();

  const signupForm = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      cpassword: ''
    },
    onSubmit: (values) => {
      console.log(values);

      // sending request to backend
      fetch('http://localhost:5000/user/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('User added successfully', { variant: 'success' })
            router.push("/login")

          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' })
          }
        }).catch((err) => {
          console.log(err);
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        });

    },
    validationSchema: SignupSchema
  })
  return (
    <div>
      <div className="bg-white py-6 sm:py-8 lg:py-12 bg-orange-200  mt-16">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-8 lg:text-3xl">
            Register
          </h2>
          <form className="mx-auto max-w-lg rounded-lg border bg-orange-50" onSubmit={signupForm.handleSubmit}>
            <div className="flex flex-col gap-4 p-4 md:p-8">
              <div>
                <label
                  htmlFor="name" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Name
                </label>
                <input
                  name="name" type="text" value={signupForm.values.name} onChange={signupForm.handleChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                {
                  signupForm.touched.name &&
                  <span className="text-red-500">{signupForm.errors.name}</span>
                }
              </div>
              <div>
                <label
                  htmlFor="email" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Email
                </label>
                <input
                  name="email" type="email" value={signupForm.values.email} onChange={signupForm.handleChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                {
                  signupForm.touched.email &&
                  <span className="text-red-500">{signupForm.errors.email}</span>
                }
              </div>
              <div>
                <label
                  htmlFor="password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base" >
                  Password
                </label>
                <input name="password" type="password" value={signupForm.values.password} onChange={signupForm.handleChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                {
                  signupForm.touched.password &&
                  <span className="text-red-500">{signupForm.errors.password}</span>
                }
              </div>
              <div>
                <label htmlFor="confirm-password" className="mb-2 inline-block text-sm text-gray-800 sm:text-base">
                  Confirm Password
                </label>
                <input type="password" name="cpassword" value={signupForm.values.cpassword} onChange={signupForm.handleChange} className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring" />
                {
                  signupForm.touched.cpassword &&
                  <span className="text-red-500">{signupForm.errors.cpassword}</span>
                }
                <div className="hidden absolute inset-y-0 end-0 pointer-events-none pe-3">
                  <svg className="size-5 text-red-500" width={16} height={16} fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                    <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                  </svg>
                </div>
              </div>
              <p className="hidden text-xs text-red-600 mt-2" id="confirm-password-error"
              >
                Password does not match the password
              </p>
              <button type='submit' className="block rounded-lg bg-gray-800 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-gray-300 transition duration-100 hover:bg-gray-700 focus-visible:ring active:bg-gray-600 md:text-base">
                Signup
              </button>
            </div>
            <div className="flex items-center justify-center bg-gray-100 p-4">
              <p className="text-center text-sm text-gray-500">
                Already Registered.{" "}
                <Link href="/login" className="text-indigo-500 transition duration-100 hover:text-indigo-600 active:text-indigo-700"
                >
                  Login
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Signup;