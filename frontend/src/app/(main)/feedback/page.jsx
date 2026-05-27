'use client';
import { useFormik } from 'formik';
import { useRouter } from 'next/navigation';
import { enqueueSnackbar } from 'notistack';
import React, { useState } from 'react'
import ReactStars from "react-rating-stars-component";


const Feedback = () => {

    const [rating, setRating] = useState(0);
    // const router = useRouter();

    const feedbackForm = useFormik({
        initialValues: {
            name: '',
            email: '',
            rating: "",
            message: ""
        },
        onSubmit: (values) => {
            values.rating = rating;
            console.log(values);


            // sending request to backend
            fetch('http://localhost:5000/feedback/add', {
                method: 'POST',
                body: JSON.stringify(values),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then((response) => {
                    console.log(response.status);
                    if (response.status === 200) {
                        enqueueSnackbar('feedback added successfully', { variant: 'success' })
                        // router.push("/")

                    } else {
                        enqueueSnackbar('Something went wrong', { variant: 'error' })
                    }
                }).catch((err) => {
                    console.log(err);
                    enqueueSnackbar('Something went wrong', { variant: 'error' });
                });

        },

    })
    return (
        <div>
            <div className="max-w-xl mx-auto mt-16 flex w-full flex-col border rounded-lg bg-white p-8 mt-40">
                <form action="" onSubmit={feedbackForm.handleSubmit}>
                    <h2 className="title-font mb-1 text-lg font-medium text-gray-900">
                        Feedback
                    </h2>
                    <p className="mb-5 leading-relaxed text-gray-600">
                        If you had any issues or you liked our product, please share with us!
                    </p>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={feedbackForm.values.name}
                            onChange={feedbackForm.handleChange}
                            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="text-sm leading-7 text-gray-600">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={feedbackForm.values.email}
                            onChange={feedbackForm.handleChange}
                            className="w-full rounded border border-gray-300 bg-white py-1 px-3 text-base leading-8 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="message" className="text-sm leading-7 text-gray-600">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={feedbackForm.values.message}
                            onChange={feedbackForm.handleChange}
                            className="h-32 w-full resize-none rounded border border-gray-300 bg-white py-1 px-3 text-base leading-6 text-gray-700 outline-none transition-colors duration-200 ease-in-out focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200"
                            defaultValue={""}
                        />
                    </div>



                    <ReactStars
                        rating={rating}
                        onChange={setRating}
                        size={24}
                        activeColor="#ffd700"
                    />


                    <button type='submit' className="rounded border-0 bg-indigo-500 py-2 px-6 text-lg text-white hover:bg-indigo-600 focus:outline-none">
                        Send
                    </button>
                    <p className="mt-3 text-xs text-gray-500">
                        Feel free to connect with us on social media platforms.
                    </p>
                </form>
            </div>

        </div>
    )
}

export default Feedback
