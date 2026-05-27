'use client'
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React from 'react'

const Contact = () => {
  const router = useRouter();

  const contactForm = useFormik({
    initialValues: {
      firstname: '',
      lastname: '',
      email: '',
      subject: '',
      message: '',
    },
    onSubmit: (values) => {
      console.log(values);
      // sending request to backend
      fetch('http://localhost:5000/contact/add', {
        method: 'POST',
        body: JSON.stringify(values),
        headers: {
          'Content-Type': 'application/json'
        }
      })
        .then((response) => {
          console.log(response.status);
          if (response.status === 200) {
            enqueueSnackbar('Message delivered', { variant: 'success' })
            router.push("/contact")

          } else {
            enqueueSnackbar('Something went wrong', { variant: 'error' })
          }
        }).catch((err) => {
          console.log(err);
          enqueueSnackbar('Something went wrong', { variant: 'error' });
        });

    }
  })

  return (
    <div className="bg-white py-6 sm:py-8 lg:py-12 mt-16">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        {/* text - start */}
        <div className="mb-10 md:mb-16">
          <h2 className="mb-4 text-center text-2xl font-bold text-gray-800 md:mb-6 lg:text-3xl">
            Get in touch
          </h2>
          <p className="mx-auto max-w-screen-md text-center text-gray-500 md:text-lg">
            Thanks for dropping by! Whether you have a burning question, a brilliant idea, or just want to say hi, we're thrilled to hear from you. Feel free to reach out using any of the methods below, and we'll get back to you as soon as possible.
          </p>
        </div>
        {/* text - end */}
        {/* form - start */}
        <form onSubmit={contactForm.handleSubmit} className="mx-auto grid max-w-screen-md gap-4 sm:grid-cols-2">
          <div>
            <label
              htmlFor="first-name"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              First name*
            </label>
            <input
              name="firstname"
              type="text"
              value={contactForm.values.name}
              onChange={contactForm.handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div>
            <label
              htmlFor="lastname"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Last name*
            </label>
            <input
              name="lastname"
              type="text"
              value={contactForm.values.name}
              onChange={contactForm.handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="email"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Email*
            </label>
            <input
              name="email"
              type="email"
              value={contactForm.values.name}
              onChange={contactForm.handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="subject"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Subject*
            </label>
            <input
              name="subject"
              type="text"
              value={contactForm.values.name}
              onChange={contactForm.handleChange}
              className="w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
            />
          </div>
          <div className="sm:col-span-2">
            <label
              htmlFor="message"
              className="mb-2 inline-block text-sm text-gray-800 sm:text-base"
            >
              Message*
            </label>
            <textarea
              name="message"
              type="text"
              value={contactForm.values.name}
              onChange={contactForm.handleChange}
              className="h-64 w-full rounded border bg-gray-50 px-3 py-2 text-gray-800 outline-none ring-indigo-300 transition duration-100 focus:ring"
              defaultValue={""}
            />
          </div>
          <div className="flex items-center justify-between sm:col-span-2">
            <button type='submit' className="inline-block rounded-lg bg-indigo-500 px-8 py-3 text-center text-sm font-semibold text-white outline-none ring-indigo-300 transition duration-100 hover:bg-indigo-600 focus-visible:ring active:bg-indigo-700 md:text-base">
              Send
            </button>
            <span className="text-sm text-gray-500">*Required</span>
          </div>
        </form>
        {/* form - end */}
      </div>
    </div>


  )
}
export default Contact