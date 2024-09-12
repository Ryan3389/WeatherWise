import { Link } from "react-router-dom"
export const Navbar = () => {
    return (
        <nav
            className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
            <div className="flex flex-wrap justify-between items-center">
                <p className="self-center text-2xl font-semibold whitespace-nowrap"> WeatherWise</p>
                <div>
                    {/* This will be the dashboard home button, if not logged in, redirected to login page */
                        /*
                            if logged in, replace the navbar home, etc.
                        */
                    }
                    <Link to="/">Home</Link>
                    <Link to="/login" className="px-4">Login</Link>
                    <Link to="/signup">Create Account</Link>
                </div>
            </div>
        </nav>
    )
}