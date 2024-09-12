import { Link } from "react-router-dom"
export const LoginPage = () => {
    return (
        <section className="min-h-screen flex justify-center items-center">
            <form className="p-8 rounded-lg max-w-md w-full">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 text-center">Login</h1>
                <label htmlFor="email" className="block text-gray-900 mb-2">Email</label>
                <input type="email" name="email" id="email" className="border border-gray-300 p-2 w-full rounded mb-4" />
                <label htmlFor="password" className="block text-gray-900 mb-2">Password</label>
                <input type="password" name="password" id="password" className="border border-gray-300 p-2 w-full rounded mb-6" />
                <p className="text-center mb-3 text-gray-900">Don't have an account ? <Link to="/signup">Click here</Link></p>
                <button className="bg-gray-600 text-white w-full p-2 rounded hover:bg-gray-700">Sign In</button>
            </form>
        </section>
    )
}