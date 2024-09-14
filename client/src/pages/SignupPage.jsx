import { useState } from "react"
import { useMutation } from '@apollo/client'
import { CREATE_USER } from "../utils/mutations"
import auth from "../utils/auth"

export const SignupPage = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: ''
    })

    // const [createUser, { error, data }] = useMutation(CREATE_USER)


    const handleChange = (e) => {
        const { name, value } = e.target
        setFormState({
            ...formState,
            [name]: value
        })
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault()
        try {
            const { data } = await createUser({
                variables: { ...formState }
            })
            if (data && data.createUser) {
                auth.login(data.createUser.token)
            }
        } catch (error) {
            console.error('User login error, signup page: ', error)
        }
    }



    return (
        <section onSubmit={handleFormSubmit} className="min-h-screen flex justify-center items-center">
            <form className="max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Create Account</h1>

                <label htmlFor="firstName" className="block text-gray-900 mb-2">First Name</label>
                <input type="text"
                    name="firstName"
                    id="firstName"
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                    onChange={handleChange}
                />

                <label htmlFor="lastName" className="block text-gray-900 mb-2">Last Name</label>
                <input
                    type="text"
                    name="lastName"
                    id="lastName"
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                    onChange={handleChange}
                />

                <label htmlFor="email" className="block text-gray-900 mb-2">Email</label>
                <input
                    type="email"
                    name="email"
                    id="email"
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                    onChange={handleChange}
                />

                <label htmlFor="password" className="block text-gray-900 mb-2">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    className="border border-gray-300 p-2 w-full rounded mb-4"
                    onChange={handleChange}
                />

                {/* <label htmlFor="confirmPassword" className="block text-gray-900 mb-2">Confirm Password</label>
                <input type="password" name="confirmPassword" id="confirmPassword" className="border border-gray-300 p-2 w-full rounded mb-4" /> */}
                <button type="submit" className="bg-gray-900 text-white w-full p-2 rounded hover:bg-gray-700">Create Account</button>
            </form>
        </section>
    )
}